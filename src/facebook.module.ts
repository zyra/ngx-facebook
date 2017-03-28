import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FacebookService, FBLikeComponent, FBFollowComponent, FBPageComponent, FBQuoteComponent, FBSaveComponent, FBSendComponent, FBShareComponent } from './';

const components: any[] = [
  FBLikeComponent,
  FBFollowComponent,
  FBPageComponent,
  FBQuoteComponent,
  FBSaveComponent,
  FBSendComponent,
  FBShareComponent
];

/**
 * The main module to import into your application.
 * You only need to import this module if you wish to use the components in this library; otherwise, you could just import [FacebookService](../FacebookService) into your module instead.
 * This module will make all components and providers available in your application.
 *
 * @usage
 * ```typescript
 * import { FacebookModule } from 'ng2-facebook-sdk';
 *
 * @NgModule({
 *   ...
 *   imports: [
 *     FacebookModule
 *     ...
 *     ],
 *   ...
 * })
 * export class AppModule { }
 * ```
 */
@NgModule({
  providers: [FacebookService],
  declarations: components,
  imports: [BrowserModule],
  exports: components
})
export class FacebookModule {}
