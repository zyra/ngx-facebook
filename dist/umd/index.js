(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./components/fb-comment-embed/fb-comment-embed", "./components/fb-comments/fb-comments", "./components/fb-follow/fb-follow", "./components/fb-like/fb-like", "./components/fb-page/fb-page", "./components/fb-post/fb-post", "./components/fb-quote/fb-quote", "./components/fb-save/fb-save", "./components/fb-send/fb-send", "./components/fb-share/fb-share", "./components/fb-video/fb-video", "./providers/facebook", "./facebook.module"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // components
    var fb_comment_embed_1 = require("./components/fb-comment-embed/fb-comment-embed");
    exports.FBCommentEmbedComponent = fb_comment_embed_1.FBCommentEmbedComponent;
    var fb_comments_1 = require("./components/fb-comments/fb-comments");
    exports.FBCommentsComponent = fb_comments_1.FBCommentsComponent;
    var fb_follow_1 = require("./components/fb-follow/fb-follow");
    exports.FBFollowComponent = fb_follow_1.FBFollowComponent;
    var fb_like_1 = require("./components/fb-like/fb-like");
    exports.FBLikeComponent = fb_like_1.FBLikeComponent;
    var fb_page_1 = require("./components/fb-page/fb-page");
    exports.FBPageComponent = fb_page_1.FBPageComponent;
    var fb_post_1 = require("./components/fb-post/fb-post");
    exports.FBPostComponent = fb_post_1.FBPostComponent;
    var fb_quote_1 = require("./components/fb-quote/fb-quote");
    exports.FBQuoteComponent = fb_quote_1.FBQuoteComponent;
    var fb_save_1 = require("./components/fb-save/fb-save");
    exports.FBSaveComponent = fb_save_1.FBSaveComponent;
    var fb_send_1 = require("./components/fb-send/fb-send");
    exports.FBSendComponent = fb_send_1.FBSendComponent;
    var fb_share_1 = require("./components/fb-share/fb-share");
    exports.FBShareComponent = fb_share_1.FBShareComponent;
    var fb_video_1 = require("./components/fb-video/fb-video");
    exports.FBVideoComponent = fb_video_1.FBVideoComponent;
    // providers
    var facebook_1 = require("./providers/facebook");
    exports.FacebookService = facebook_1.FacebookService;
    // modules
    var facebook_module_1 = require("./facebook.module");
    exports.FacebookModule = facebook_module_1.FacebookModule;
});
//# sourceMappingURL=index.js.map