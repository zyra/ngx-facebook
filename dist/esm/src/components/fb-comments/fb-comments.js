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
import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from '../fbml-component';
import * as i0 from "@angular/core";
/**
 * @name Comments
 * @shortdesc Comments component
 * @fbdoc https://developers.facebook.com/docs/plugins/comments
 * @description
 * The comments plugin lets people comment on content on your site using their Facebook account.
 * People can choose to share their comment activity with their friends (and friends of their friends) on Facebook as well.
 * The comments plugin also includes built-in moderation tools and social relevance ranking.
 *
 * @usage
 * ```html
 * <fb-comments></fb-comments>
 * ```
 */
var FBCommentsComponent = /** @class */ (function (_super) {
    __extends(FBCommentsComponent, _super);
    function FBCommentsComponent(el, rnd) {
        var _this = _super.call(this, el, rnd, 'fb-comments') || this;
        /**
         * The absolute URL that comments posted in the plugin will be permanently associated with.
         * All stories shared on Facebook about comments posted using the comments plugin will link to this URL.
         * Defaults to current URL.
         */
        _this.href = window.location.href;
        return _this;
    }
    FBCommentsComponent.ɵfac = function FBCommentsComponent_Factory(t) { return new (t || FBCommentsComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    FBCommentsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FBCommentsComponent, selectors: [["fb-comments"]], inputs: { colorscheme: "colorscheme", href: "href", mobile: "mobile", numposts: "numposts", orderBy: "orderBy", width: "width" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function FBCommentsComponent_Template(rf, ctx) { }, encapsulation: 2 });
    __decorate([
        FBMLAttribute,
        __metadata("design:type", String)
    ], FBCommentsComponent.prototype, "colorscheme", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", String)
    ], FBCommentsComponent.prototype, "href", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", Boolean)
    ], FBCommentsComponent.prototype, "mobile", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", Number)
    ], FBCommentsComponent.prototype, "numposts", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", String)
    ], FBCommentsComponent.prototype, "orderBy", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", String)
    ], FBCommentsComponent.prototype, "width", void 0);
    return FBCommentsComponent;
}(FBMLComponent));
export { FBCommentsComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FBCommentsComponent, [{
        type: Component,
        args: [{
                selector: 'fb-comments',
                template: ''
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { colorscheme: [{
            type: Input
        }], href: [{
            type: Input
        }], mobile: [{
            type: Input
        }], numposts: [{
            type: Input
        }], orderBy: [{
            type: Input
        }], width: [{
            type: Input
        }] }); })();
//# sourceMappingURL=fb-comments.js.map