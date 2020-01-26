import { FBPageComponent } from './fb-page';
import { async, TestBed } from '@angular/core/testing';
describe('FBPageComponent', function () {
    var de, comp, fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FBPageComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FBPageComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement;
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should have fb-page class', function () { return expect(de.classes['fb-page']).toBeTruthy(); });
    it('should have data-href property', function () {
        comp.href = 'https://zyramedia.com';
        expect(Object.keys(de.attributes).indexOf('data-href')).toBeDefined();
        expect(de.attributes['data-href']).toEqual('https://zyramedia.com');
    });
});
//# sourceMappingURL=fb-page.spec.js.map