import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  FacebookService,
  FBCommentEmbedComponent,
  FBCommentsComponent,
  FBFollowComponent,
  FBLikeComponent,
  FBPageComponent,
  FBPostComponent,
  FBQuoteComponent,
  FBSaveComponent,
  FBSendComponent,
  FBShareComponent,
  FBVideoComponent
} from './';

const components: any[] = [
  FBCommentEmbedComponent,
  FBCommentsComponent,
  FBFollowComponent,
  FBLikeComponent,
  FBPageComponent,
  FBPostComponent,
  FBQuoteComponent,
  FBSaveComponent,
  FBSendComponent,
  FBShareComponent,
  FBVideoComponent
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
 *     FacebookModule.forRoot()
 *     ...
 *     ],
 *   ...
 * })
 * export class AppModule { }
 * ```
 */
@NgModule({
  declarations: components,
  exports: components
})
export class FacebookModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FacebookModule,
      providers: [FacebookService]
    }
  }
}
