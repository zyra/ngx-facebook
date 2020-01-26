import { FBPostComponent } from './fb-post';
import { async, TestBed } from '@angular/core/testing';
describe('FBPostComponent', function () {
    var de, comp, fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FBPostComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FBPostComponent);
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
//# sourceMappingURL=fb-post.spec.js.map