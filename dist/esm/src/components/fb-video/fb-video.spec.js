import { FBVideoComponent } from './fb-video';
import { async, TestBed } from '@angular/core/testing';
describe('FBVideoComponent', function () {
    var de, comp, fixture;
    beforeAll(function () {
        window.FB = {
            Event: {
                subscribe: function () { }
            }
        };
    });
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FBVideoComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FBVideoComponent);
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
//# sourceMappingURL=fb-video.spec.js.map