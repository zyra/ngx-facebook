import { FacebookService } from './facebook';
import { async } from '@angular/core/testing';
import {InitParams} from '../models/init-params';
declare var FB: any;

describe('FacebookService', () => {

  let service: FacebookService;

  beforeAll(() => service = new FacebookService());

  it('should create an instance of the service', () => {
    expect(service).toBeDefined();
  });

  it('should throw error if we call api before init', async(() => {
    service.api('friends').catch(e => {
      expect(e).toBeDefined();
    });
  }));

  it('should init', () => {
    spyOn(FB, 'init').and.callThrough();
    const options: InitParams = {
      appId: '1927971220769787',
      version: 'v2.8'
    };
    service.init(options);
    expect(FB.init).toHaveBeenCalledWith(options);
  });

  it('should call login', () => {
    spyOn(FB, 'login');
    service.login();
    expect(FB.login).toHaveBeenCalled();
  });

});
