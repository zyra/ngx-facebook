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
     * @name Embedded Posts
     * @shortdesc Embedded post component
     * @fbdoc https://developers.facebook.com/docs/plugins/embedded-posts
     * @description
     * Embedded Posts are a simple way to put public posts - by a Page or a person on Facebook - into the content of your web site or web page.
     * Only public posts from Facebook Pages and profiles can be embedded.
     * @usage
     * ```html
     * <fb-post href="https://www.facebook.com/20531316728/posts/10154009990506729/"></fb-post>
     * ```
     */
    var FBPostComponent = /** @class */ (function (_super) {
        __extends(FBPostComponent, _super);
        function FBPostComponent(el, rnd) {
            return _super.call(this, el, rnd, 'fb-post') || this;
        }
        FBPostComponent.decorators = [
            { type: core_1.Component, args: [{
                        selector: 'fb-post',
                        template: ''
                    },] },
        ];
        /** @nocollapse */
        FBPostComponent.ctorParameters = function () { return [
            { type: core_1.ElementRef, },
            { type: core_1.Renderer2, },
        ]; };
        FBPostComponent.propDecorators = {
            'href': [{ type: core_1.Input },],
            'width': [{ type: core_1.Input },],
            'showText': [{ type: core_1.Input },],
        };
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", String)
        ], FBPostComponent.prototype, "href", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", String)
        ], FBPostComponent.prototype, "width", void 0);
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", Boolean)
        ], FBPostComponent.prototype, "showText", void 0);
        return FBPostComponent;
    }(fbml_component_1.FBMLComponent));
    exports.FBPostComponent = FBPostComponent;
});
//# sourceMappingURL=fb-post.js.map