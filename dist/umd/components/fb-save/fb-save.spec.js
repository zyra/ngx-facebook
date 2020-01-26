(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./fb-save", "@angular/core/testing"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fb_save_1 = require("./fb-save");
    var testing_1 = require("@angular/core/testing");
    describe('FBSaveComponent', function () {
        var de, comp, fixture;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [fb_save_1.FBSaveComponent]
            }).compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(fb_save_1.FBSaveComponent);
            comp = fixture.componentInstance;
            de = fixture.debugElement;
        });
        it('should create component', function () { return expect(comp).toBeDefined(); });
        it('should have fb-save class', function () { return expect(de.classes['fb-save']).toBeTruthy(); });
        it('should have data-uri property', function () {
            comp.uri = 'https://zyramedia.com';
            expect(Object.keys(de.attributes).indexOf('data-uri')).toBeDefined();
            expect(de.attributes['data-uri']).toEqual('https://zyramedia.com');
        });
    });
});
//# sourceMappingURL=fb-save.spec.js.map