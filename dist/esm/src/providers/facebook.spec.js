import { FacebookService } from './facebook';
import { async } from '@angular/core/testing';
describe('FacebookService', function () {
    var service;
    beforeAll(function () {
        service = new FacebookService();
        window['FB'] = {
            init: function (params) { return params; },
            login: function () { }
        };
    });
    it('should create an instance of the service', function () {
        expect(service).toBeDefined();
    });
    it('should throw error if we call api before init', async(function () {
        service.api('friends').catch(function (e) {
            expect(e).toBeDefined();
        });
    }));
    it('should init', function () {
        spyOn(window.FB, 'init').and.callThrough();
        var options = {
            appId: '1927971220769787',
            version: 'v2.8'
        };
        service.init(options);
        expect(window.FB.init).toHaveBeenCalledWith(options);
    });
    it('should call login', function () {
        spyOn(window.FB, 'login');
        service.login();
        expect(window.FB.login).toHaveBeenCalled();
    });
});
//# sourceMappingURL=facebook.spec.js.map