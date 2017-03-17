import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FacebookService, FBLikeComponent, FBFollowComponent, FBPageComponent } from './';

@NgModule({
  providers: [FacebookService],
  declarations: [
    FBLikeComponent,
    FBFollowComponent,
    FBPageComponent
  ],
  imports: [BrowserModule],
  exports: [
    FBLikeComponent,
    FBFollowComponent,
    FBPageComponent
  ]
})
export class FacebookModule {}
