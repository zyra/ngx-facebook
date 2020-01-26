(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./fb-video", "@angular/core/testing"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fb_video_1 = require("./fb-video");
    var testing_1 = require("@angular/core/testing");
    describe('FBVideoComponent', function () {
        var de, comp, fixture;
        beforeAll(function () {
            window.FB = {
                Event: {
                    subscribe: function () { }
                }
            };
        });
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [fb_video_1.FBVideoComponent]
            }).compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(fb_video_1.FBVideoComponent);
            comp = fixture.componentInstance;
            de = fixture.debugElement;
        });
        it('should create component', function () { return expect(comp).toBeDefined(); });
        it('should have fb-video class', function () { return expect(de.classes['fb-video']).toBeTruthy(); });
        it('should have data-href property', function () {
            comp.href = 'https://zyramedia.com';
            expect(Object.keys(de.attributes).indexOf('data-href')).toBeDefined();
            expect(de.attributes['data-href']).toEqual('https://zyramedia.com');
        });
    });
});
//# sourceMappingURL=fb-video.spec.js.map