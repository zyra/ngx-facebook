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
     * @name Like Button
     * @shortdesc Like button component
     * @fbdoc https://developers.facebook.com/docs/plugins/like-button
     * @description
     * A single click on the Like button will 'like' pieces of content on the web and share them on Facebook.
     * You can also display a Share button next to the Like button to let people add a personal message and customize who they share with.
     * @usage
     * ```html
     * <fb-like href="https://www.facebook.com/zuck"></fb-like>
     * ```
     */
    var FBLikeComponent = /** @class */ (function (_super) {
        __extends(FBLikeComponent, _super);
        function FBLikeComponent(el, rnd) {
            var _this = _super.call(this, el, rnd, 'fb-like') || this;
            /**
             * The absolute URL of the page that will be liked.
             * Defaults to the current URL.
             */
            _this.href = window.location.href;
            return _this;
        }
        FBLikeComponent.ɵfac = function FBLikeComponent_Factory(t) { return new (t || FBLikeComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
        FBLikeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FBLikeComponent, selectors: [["fb-like"]], inputs: { action: "action", colorScheme: "colorScheme", href: "href", kidDirectedSite: "kidDirectedSite", layout: "layout", ref: "ref", share: "share", showFaces: "showFaces", size: "size", width: "width" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function FBLikeComponent_Template(rf, ctx) { }, encapsulation: 2 });
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", String)
        ], FBLikeComponent.prototype, "action", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", String)
        ], FBLikeComponent.prototype, "colorScheme", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", String)
        ], FBLikeComponent.prototype, "href", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", Boolean)
        ], FBLikeComponent.prototype, "kidDirectedSite", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", String)
        ], FBLikeComponent.prototype, "layout", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", String)
        ], FBLikeComponent.prototype, "ref", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", Boolean)
        ], FBLikeComponent.prototype, "share", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", Boolean)
        ], FBLikeComponent.prototype, "showFaces", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", String)
        ], FBLikeComponent.prototype, "size", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", String)
        ], FBLikeComponent.prototype, "width", void 0);
        return FBLikeComponent;
    }(fbml_component_1.FBMLComponent));
    exports.FBLikeComponent = FBLikeComponent;
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FBLikeComponent, [{
            type: core_1.Component,
            args: [{
                    selector: 'fb-like',
                    template: ''
                }]
        }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { action: [{
                type: core_1.Input
            }], colorScheme: [{
                type: core_1.Input
            }], href: [{
                type: core_1.Input
            }], kidDirectedSite: [{
                type: core_1.Input
            }], layout: [{
                type: core_1.Input
            }], ref: [{
                type: core_1.Input
            }], share: [{
                type: core_1.Input
            }], showFaces: [{
                type: core_1.Input
            }], size: [{
                type: core_1.Input
            }], width: [{
                type: core_1.Input
            }] }); })();
});
//# sourceMappingURL=fb-like.js.map