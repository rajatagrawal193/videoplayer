import { VideoService } from './../video.service';
import { Component, OnInit } from '@angular/core';
import { Video } from "../video";
@Component({
  selector: 'app-video-center',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css'],
  providers: [VideoService]
})
export class VideoplayerComponent implements OnInit {
  selectedVideo: Video;
  private hidenewVideo: boolean = true;
  videos: Array<Video>;
  pdf;
  constructor(private _videoService: VideoService) { }

  ngOnInit() 
  {
    this._videoService.getVideos()
      .subscribe(resVideoData => this.videos = resVideoData);
  }

  onSelectVideo(video: any) {
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

  newVideo() {
    this.hidenewVideo = false;
  }

  onSubmitAddVideo(video: Video) {
    this._videoService.addVideo(video)
      .subscribe(resNewVideo => {
        this.videos.push(resNewVideo);
        this.hidenewVideo = true;
        this.selectedVideo = resNewVideo;
      });

  }

  onUpdateVideoEvent(video: any) {
    this._videoService.updateVideo(video)
      .subscribe(resUpdatedVideo => video = resUpdatedVideo);
    this.selectedVideo = null;
  };

  onDeleteVideoEvent(video: any) {
    let videoArray = this.videos;
    this._videoService.deleteVideo(video)
      .subscribe(resDeletedVideo => {
        for (let i = 0; i < videoArray.length; i++) {
          if (videoArray[i]._id === video._id) {
            videoArray.splice(i, 1);
          }
        }
      });
    this.selectedVideo = null;
  };
  pdfViewer(){
    this._videoService.getPdf()
    .subscribe(resData=>this.pdf= resData);
    console.log(this.pdf)
  }

}