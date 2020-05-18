var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "../fbml-component", "@angular/core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var fbml_component_1 = require("../fbml-component");
    var i0 = require("@angular/core");
    /**
     * @name Embedded Comments
     * @shortdesc Embedded comments component
     * @fbdoc https://developers.facebook.com/docs/plugins/embedded-comments
     * @description
     * Embedded comments are a simple way to put public post comments - by a Page or a person on Facebook - into the content of your web site or web page.
     * Only public comments from Facebook Pages and profiles can be embedded.
     * @usage
     * ```html
     * <fb-comment-embed href="https://www.facebook.com/zuck/posts/10102735452532991?comment_id=1070233703036185" width="500"></fb-comment-embed>
     * ```
     */
    var FBCommentEmbedComponent = /** @class */ (function (_super) {
        __extends(FBCommentEmbedComponent, _super);
        function FBCommentEmbedComponent(el, rnd) {
            return _super.call(this, el, rnd, 'fb-comment-embed') || this;
        }
        FBCommentEmbedComponent.ɵfac = function FBCommentEmbedComponent_Factory(t) { return new (t || FBCommentEmbedComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
        FBCommentEmbedComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FBCommentEmbedComponent, selectors: [["fb-comment-embed"]], inputs: { href: "href", width: "width", includeParent: "includeParent" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function FBCommentEmbedComponent_Template(rf, ctx) { }, encapsulation: 2 });
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", String)
        ], FBCommentEmbedComponent.prototype, "href", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", String)
        ], FBCommentEmbedComponent.prototype, "width", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", Boolean)
        ], FBCommentEmbedComponent.prototype, "includeParent", void 0);
        return FBCommentEmbedComponent;
    }(fbml_component_1.FBMLComponent));
    exports.FBCommentEmbedComponent = FBCommentEmbedComponent;
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FBCommentEmbedComponent, [{
            type: core_1.Component,
            args: [{
                    selector: 'fb-comment-embed',
                    template: ''
                }]
        }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { href: [{
                type: core_1.Input
            }], width: [{
                type: core_1.Input
            }], includeParent: [{
                type: core_1.Input
            }] }); })();
});
//# sourceMappingURL=fb-comment-embed.js.map