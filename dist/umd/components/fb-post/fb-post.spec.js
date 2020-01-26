(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./fb-post", "@angular/core/testing"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fb_post_1 = require("./fb-post");
    var testing_1 = require("@angular/core/testing");
    describe('FBPostComponent', function () {
        var de, comp, fixture;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [fb_post_1.FBPostComponent]
            }).compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(fb_post_1.FBPostComponent);
            comp = fixture.componentInstance;
            de = fixture.debugElement;
        });
        it('should create component', function () { return expect(comp).toBeDefined(); });
        it('should have fb-post class', function () { return expect(de.classes['fb-post']).toBeTruthy(); });
        it('should have data-href property', function () {
            comp.href = 'https://zyramedia.com';
            expect(Object.keys(de.attributes).indexOf('data-href')).toBeDefined();
            expect(de.attributes['data-href']).toEqual('https://zyramedia.com');
        });
    });
});
//# sourceMappingURL=fb-post.spec.js.map