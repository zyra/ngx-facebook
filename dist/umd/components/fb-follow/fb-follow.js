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
     * @name Follow Button
     * @shortdesc Follow button component
     * @fbdoc https://developers.facebook.com/docs/plugins/follow-button
     * @description The Follow button lets people subscribe to the public updates of others on Facebook.
     * @usage
     * ```html
     * <fb-follow href="https://www.facebook.com/zuck"></fb-follow>
     * ```
     */
    var FBFollowComponent = /** @class */ (function (_super) {
        __extends(FBFollowComponent, _super);
        function FBFollowComponent(el, rnd) {
            return _super.call(this, el, rnd, 'fb-follow') || this;
        }
        FBFollowComponent.decorators = [
            { type: core_1.Component, args: [{
                        selector: 'fb-follow',
                        template: ''
                    },] },
        ];
        /** @nocollapse */
        FBFollowComponent.ctorParameters = function () { return [
            { type: core_1.ElementRef, },
            { type: core_1.Renderer2, },
        ]; };
        FBFollowComponent.propDecorators = {
            'colorScheme': [{ type: core_1.Input },],
            'href': [{ type: core_1.Input },],
            'kidDirectedSite': [{ type: core_1.Input },],
            'layout': [{ type: core_1.Input },],
            'showFaces': [{ type: core_1.Input },],
            'size': [{ type: core_1.Input },],
            'width': [{ type: core_1.Input },],
        };
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", String)
        ], FBFollowComponent.prototype, "colorScheme", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", String)
        ], FBFollowComponent.prototype, "href", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", Boolean)
        ], FBFollowComponent.prototype, "kidDirectedSite", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", String)
        ], FBFollowComponent.prototype, "layout", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", String)
        ], FBFollowComponent.prototype, "showFaces", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", String)
        ], FBFollowComponent.prototype, "size", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", String)
        ], FBFollowComponent.prototype, "width", void 0);
        return FBFollowComponent;
    }(fbml_component_1.FBMLComponent));
    exports.FBFollowComponent = FBFollowComponent;
});
//# sourceMappingURL=fb-follow.js.map