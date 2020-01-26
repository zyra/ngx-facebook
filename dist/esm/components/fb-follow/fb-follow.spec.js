import { FBFollowComponent } from './fb-follow';
import { async, TestBed } from '@angular/core/testing';
describe('FBFollowComponent', function () {
    var de, comp, fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FBFollowComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FBFollowComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement;
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should have fb-follow class', function () { return expect(de.classes['fb-follow']).toBeTruthy(); });
    it('should have data-href property', function () {
        comp.href = 'https://zyramedia.com';
        fixture.detectChanges();
        expect(Object.keys(de.attributes).indexOf('data-href')).toBeDefined();
        expect(de.attributes['data-href']).toEqual('https://zyramedia.com');
    });
});
//# sourceMappingURL=fb-follow.spec.js.map