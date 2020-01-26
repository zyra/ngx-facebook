(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./fb-comment-embed", "@angular/core/testing"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fb_comment_embed_1 = require("./fb-comment-embed");
    var testing_1 = require("@angular/core/testing");
    describe('FBCommentEmbedComponent', function () {
        var de, comp, fixture;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [fb_comment_embed_1.FBCommentEmbedComponent]
            }).compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(fb_comment_embed_1.FBCommentEmbedComponent);
            comp = fixture.componentInstance;
            de = fixture.debugElement;
        });
        it('should create component', function () { return expect(comp).toBeDefined(); });
        it('should have fb-comment-embed class', function () { return expect(de.classes['fb-comment-embed']).toBeTruthy(); });
        it('should have data-href property', function () {
            comp.href = 'https://zyramedia.com';
            expect(de.attributes['data-href']).toBeDefined();
            expect(de.attributes['data-href']).toEqual('https://zyramedia.com');
        });
    });
});
//# sourceMappingURL=fb-comment.embed.spec.js.map