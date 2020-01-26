(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./providers/facebook", "./components/fb-comment-embed/fb-comment-embed", "./components/fb-comments/fb-comments", "./components/fb-follow/fb-follow", "./components/fb-like/fb-like", "./components/fb-page/fb-page", "./components/fb-post/fb-post", "./components/fb-quote/fb-quote", "./components/fb-save/fb-save", "./components/fb-send/fb-send", "./components/fb-share/fb-share", "./components/fb-video/fb-video"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var facebook_1 = require("./providers/facebook");
    var fb_comment_embed_1 = require("./components/fb-comment-embed/fb-comment-embed");
    var fb_comments_1 = require("./components/fb-comments/fb-comments");
    var fb_follow_1 = require("./components/fb-follow/fb-follow");
    var fb_like_1 = require("./components/fb-like/fb-like");
    var fb_page_1 = require("./components/fb-page/fb-page");
    var fb_post_1 = require("./components/fb-post/fb-post");
    var fb_quote_1 = require("./components/fb-quote/fb-quote");
    var fb_save_1 = require("./components/fb-save/fb-save");
    var fb_send_1 = require("./components/fb-send/fb-send");
    var fb_share_1 = require("./components/fb-share/fb-share");
    var fb_video_1 = require("./components/fb-video/fb-video");
    var components = [
        fb_comment_embed_1.FBCommentEmbedComponent,
        fb_comments_1.FBCommentsComponent,
        fb_follow_1.FBFollowComponent,
        fb_like_1.FBLikeComponent,
        fb_page_1.FBPageComponent,
        fb_post_1.FBPostComponent,
        fb_quote_1.FBQuoteComponent,
        fb_save_1.FBSaveComponent,
        fb_send_1.FBSendComponent,
        fb_share_1.FBShareComponent,
        fb_video_1.FBVideoComponent
    ];
    function getComponents() {
        return components;
    }
    exports.getComponents = getComponents;
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
    var FacebookModule = /** @class */ (function () {
        function FacebookModule() {
        }
        FacebookModule.forRoot = function () {
            return {
                ngModule: FacebookModule,
                providers: [facebook_1.FacebookService]
            };
        };
        FacebookModule.decorators = [
            { type: core_1.NgModule, args: [{
                        declarations: getComponents(),
                        exports: getComponents()
                    },] },
        ];
        /** @nocollapse */
        FacebookModule.ctorParameters = function () { return []; };
        return FacebookModule;
    }());
    exports.FacebookModule = FacebookModule;
});
//# sourceMappingURL=facebook.module.js.map