var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
        define(["require", "exports", "@angular/core", "../fbml-component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var fbml_component_1 = require("../fbml-component");
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
        FBPageComponent.decorators = [
            { type: core_1.Component, args: [{
                        selector: 'fb-page',
                        template: ''
                    },] },
        ];
        /** @nocollapse */
        FBPageComponent.ctorParameters = function () { return [
            { type: core_1.ElementRef, },
            { type: core_1.Renderer2, },
        ]; };
        FBPageComponent.propDecorators = {
            'href': [{ type: core_1.Input },],
            'width': [{ type: core_1.Input },],
            'height': [{ type: core_1.Input },],
            'tabs': [{ type: core_1.Input },],
            'hideCover': [{ type: core_1.Input },],
            'showFacepile': [{ type: core_1.Input },],
            'hideCTA': [{ type: core_1.Input },],
            'smallHeader': [{ type: core_1.Input },],
            'adaptContainerWidth': [{ type: core_1.Input },],
        };
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", String)
        ], FBPageComponent.prototype, "href", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", Number)
        ], FBPageComponent.prototype, "width", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", Number)
        ], FBPageComponent.prototype, "height", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", String)
        ], FBPageComponent.prototype, "tabs", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", Boolean)
        ], FBPageComponent.prototype, "hideCover", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", Boolean)
        ], FBPageComponent.prototype, "showFacepile", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", Boolean)
        ], FBPageComponent.prototype, "hideCTA", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", Boolean)
        ], FBPageComponent.prototype, "smallHeader", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", Boolean)
        ], FBPageComponent.prototype, "adaptContainerWidth", void 0);
        return FBPageComponent;
    }(fbml_component_1.FBMLComponent));
    exports.FBPageComponent = FBPageComponent;
});
//# sourceMappingURL=fb-page.js.map