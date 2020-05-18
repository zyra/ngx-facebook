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
 * @name Page Plugin
 * @shortdesc Page plugin component
 * @fbdoc https://developers.facebook.com/docs/plugins/page-plugin
 * @description
 * The Page plugin lets you easily embed and promote any Facebook Page on your website. Just like on Facebook, your visitors can like and share the Page without leaving your site.
 * @usage
 * ```html
 * <fb-page href="https://facebook.com/facebook"></fb-page>
 * ```
 */
var FBPageComponent = /** @class */ (function (_super) {
    __extends(FBPageComponent, _super);
    function FBPageComponent(el, rnd) {
        return _super.call(this, el, rnd, 'fb-page') || this;
    }
    FBPageComponent.ɵfac = function FBPageComponent_Factory(t) { return new (t || FBPageComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    FBPageComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FBPageComponent, selectors: [["fb-page"]], inputs: { href: "href", width: "width", height: "height", tabs: "tabs", hideCover: "hideCover", showFacepile: "showFacepile", hideCTA: "hideCTA", smallHeader: "smallHeader", adaptContainerWidth: "adaptContainerWidth" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function FBPageComponent_Template(rf, ctx) { }, encapsulation: 2 });
    __decorate([
        FBMLAttribute,
        __metadata("design:type", String)
    ], FBPageComponent.prototype, "href", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", Number)
    ], FBPageComponent.prototype, "width", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", Number)
    ], FBPageComponent.prototype, "height", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", String)
    ], FBPageComponent.prototype, "tabs", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", Boolean)
    ], FBPageComponent.prototype, "hideCover", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", Boolean)
    ], FBPageComponent.prototype, "showFacepile", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", Boolean)
    ], FBPageComponent.prototype, "hideCTA", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", Boolean)
    ], FBPageComponent.prototype, "smallHeader", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", Boolean)
    ], FBPageComponent.prototype, "adaptContainerWidth", void 0);
    return FBPageComponent;
}(FBMLComponent));
export { FBPageComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FBPageComponent, [{
        type: Component,
        args: [{
                selector: 'fb-page',
                template: ''
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { href: [{
            type: Input
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }], tabs: [{
            type: Input
        }], hideCover: [{
            type: Input
        }], showFacepile: [{
            type: Input
        }], hideCTA: [{
            type: Input
        }], smallHeader: [{
            type: Input
        }], adaptContainerWidth: [{
            type: Input
        }] }); })();
//# sourceMappingURL=fb-page.js.map