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
        define(["require", "exports", "./fbml-component", "@angular/core", "@angular/core/testing", "@angular/core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fbml_component_1 = require("./fbml-component");
    var core_1 = require("@angular/core");
    var testing_1 = require("@angular/core/testing");
    var i0 = require("@angular/core");
    var FBTestComponent = /** @class */ (function (_super) {
        __extends(FBTestComponent, _super);
        function FBTestComponent(el, rnd) {
            var _this = _super.call(this, el, rnd, 'fb-test') || this;
            _this._instance = {
                testMethod: function () { return 'success'; },
                testMethodWithArgs: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return args.length;
                }
            };
            return _this;
        }
        FBTestComponent.prototype.testMethod = function () { return; };
        FBTestComponent.prototype.testMethodWithArgs = function (arg1, arg2) { return; };
        FBTestComponent.ɵfac = function FBTestComponent_Factory(t) { return new (t || FBTestComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
        FBTestComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FBTestComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function FBTestComponent_Template(rf, ctx) { }, encapsulation: 2 });
        __decorate([
            fbml_component_1.FBMLAttribute,
            __metadata("design:type", String)
        ], FBTestComponent.prototype, "testAttr", void 0);
        __decorate([
            fbml_component_1.FBMLInstanceMethod,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", String)
        ], FBTestComponent.prototype, "testMethod", null);
        __decorate([
            fbml_component_1.FBMLInstanceMethod,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", Number)
        ], FBTestComponent.prototype, "testMethodWithArgs", null);
        return FBTestComponent;
    }(fbml_component_1.FBMLComponent));
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FBTestComponent, [{
            type: core_1.Component,
            args: [{
                    template: ''
                }]
        }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { testAttr: [], testMethod: [], testMethodWithArgs: [] }); })();
    describe('FBMLComponent', function () {
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [FBTestComponent]
            }).compileComponents();
        }));
        it('should create an element with class fb-test', function () {
            var instance = testing_1.TestBed.createComponent(FBTestComponent);
            instance.detectChanges();
            expect(instance.componentInstance).toBeDefined();
            expect(Object.keys(instance.debugElement.classes)).toContain('fb-test');
        });
    });
    describe('FBMLAttribute', function () {
        var de, comp, fixture;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [FBTestComponent]
            }).compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(FBTestComponent);
            comp = fixture.componentInstance;
            de = fixture.debugElement;
        });
        it('should add data-test-attr attribute to element', function () {
            comp.testAttr = 'test-val';
            fixture.detectChanges();
            expect(Object.keys(de.attributes)).toContain('data-test-attr');
            expect(de.attributes['data-test-attr']).toEqual('test-val');
            // should return value we set before
            expect(comp.testAttr).toEqual('test-val');
        });
    });
    describe('FBMLInstanceMethod', function () {
        var de, comp, fixture;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [FBTestComponent]
            }).compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(FBTestComponent);
            comp = fixture.componentInstance;
            de = fixture.debugElement;
        });
        it('should do basic call to instance method', function () {
            spyOn(comp._instance, 'testMethod').and.callThrough();
            var res = comp.testMethod();
            expect(comp._instance.testMethod).toHaveBeenCalled();
            expect(res).toEqual('success');
        });
        it('should do call with args to instance method', function () {
            spyOn(comp._instance, 'testMethodWithArgs').and.callThrough();
            var res = comp.testMethodWithArgs('hello', 'world');
            expect(comp._instance.testMethodWithArgs).toHaveBeenCalledWith('hello', 'world');
            expect(res).toEqual(2);
        });
    });
});
//# sourceMappingURL=fbml-component.spec.js.map