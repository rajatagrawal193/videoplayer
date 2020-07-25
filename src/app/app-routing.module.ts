import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {VideoplayerComponent} from './videoplayer/videoplayer.component';

// const routes: Routes = [

//   { path: '', redirectTo:'/home', pathMatch:'full'},
//   { path: 'home', component:'HomeComponent' },
//   { path: 'videos', component:'VideoplayerComponent' }
  
//   // { path: '', component:'' },
  
// ];
const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'videos', component: VideoplayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
