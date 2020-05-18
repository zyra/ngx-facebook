import { ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./components/fb-comment-embed/fb-comment-embed";
import * as i2 from "./components/fb-comments/fb-comments";
import * as i3 from "./components/fb-follow/fb-follow";
import * as i4 from "./components/fb-like/fb-like";
import * as i5 from "./components/fb-page/fb-page";
import * as i6 from "./components/fb-post/fb-post";
import * as i7 from "./components/fb-quote/fb-quote";
import * as i8 from "./components/fb-save/fb-save";
import * as i9 from "./components/fb-send/fb-send";
import * as i10 from "./components/fb-share/fb-share";
import * as i11 from "./components/fb-video/fb-video";
export declare function getComponents(): any[];
/**
 * @shortdesc The module to import to add this library
 * @description
 * The main module to import into your application.
 * You only need to import this module if you wish to use the components in this library; otherwise, you could just import [FacebookService](../facebook-service) into your module instead.
 * This module will make all components and providers available in your application.
 *
 * @usage
 * In order to use this library, you need to import `FacebookModule` into your app's main `NgModule`.
 *
 * ```typescript
 * import { FacebookModule } from 'ng2-facebook-sdk';
 *
 * @NgModule({
 *   ...
 *   imports: [
 *     ...
 *     FacebookModule.forRoot()
 *   ],
 *   ...
 * })
 * export class AppModule { }
 * ```
 */
export declare class FacebookModule {
    static forRoot(): i0.ModuleWithProviders<FacebookModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<FacebookModule, [typeof i1.FBCommentEmbedComponent, typeof i2.FBCommentsComponent, typeof i3.FBFollowComponent, typeof i4.FBLikeComponent, typeof i5.FBPageComponent, typeof i6.FBPostComponent, typeof i7.FBQuoteComponent, typeof i8.FBSaveComponent, typeof i9.FBSendComponent, typeof i10.FBShareComponent, typeof i11.FBVideoComponent], never, [typeof i1.FBCommentEmbedComponent, typeof i2.FBCommentsComponent, typeof i3.FBFollowComponent, typeof i4.FBLikeComponent, typeof i5.FBPageComponent, typeof i6.FBPostComponent, typeof i7.FBQuoteComponent, typeof i8.FBSaveComponent, typeof i9.FBSendComponent, typeof i10.FBShareComponent, typeof i11.FBVideoComponent]>;
    static ɵinj: i0.ɵɵInjectorDef<FacebookModule>;
}
