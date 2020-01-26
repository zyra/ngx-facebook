(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./fb-send", "@angular/core/testing"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fb_send_1 = require("./fb-send");
    var testing_1 = require("@angular/core/testing");
    describe('FBSendComponent', function () {
        var de, comp, fixture;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [fb_send_1.FBSendComponent]
            }).compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(fb_send_1.FBSendComponent);
            comp = fixture.componentInstance;
            de = fixture.debugElement;
        });
        it('should create component', function () { return expect(comp).toBeDefined(); });
        it('should have fb-send class', function () { return expect(de.classes['fb-send']).toBeTruthy(); });
        it('should have data-href property', function () {
            comp.href = 'https://zyramedia.com';
            expect(Object.keys(de.attributes).indexOf('data-href')).toBeDefined();
            expect(de.attributes['data-href']).toEqual('https://zyramedia.com');
        });
    });
});
//# sourceMappingURL=fb-send.spec.js.map