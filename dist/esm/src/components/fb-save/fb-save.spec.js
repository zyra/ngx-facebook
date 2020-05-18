import { FBSaveComponent } from './fb-save';
import { async, TestBed } from '@angular/core/testing';
describe('FBSaveComponent', function () {
    var de, comp, fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FBSaveComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FBSaveComponent);
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
//# sourceMappingURL=fb-save.spec.js.map