import { FBCommentEmbedComponent } from './fb-comment-embed';
import { async, TestBed } from '@angular/core/testing';
describe('FBCommentEmbedComponent', function () {
    var de, comp, fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FBCommentEmbedComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FBCommentEmbedComponent);
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
//# sourceMappingURL=fb-comment.embed.spec.js.map