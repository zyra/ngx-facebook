import { Injectable } from '@angular/core';
import { AuthResponse, InitParams, LoginOptions, LoginResponse, LoginStatus, UIParams, UIResponse } from '../models';

declare var FB: any;

// TODO create an interface (type) for the response instead of any

/**
 * @hidden
 */
export type ApiMethod = 'get' | 'post' | 'delete';

/**
 * The service to inject to use Facebook's SDK
 * @usage
 * ```typescript
 * import { FacebookService, InitParams } from 'ng2-facebook-sdk';
 *
 * constructor(private fb: FacebookService) {
 *
 *   const params: InitParams = {
 *
 *   };
 *
 *   fb.init(params);
 *
 * }
 * ```
 */
@Injectable()
export class FacebookService {

  /**
   * This method is used to initialize and setup the SDK.
   * @param params {InitParams} Initialization parameters
   */
  init(params: InitParams): void {
    FB.init(params);
  }

  /**
   * This method lets you make calls to the Graph API
   * @usage
   * ```typescript
   * this.fb.api('somepath')
   *   .then(res => console.log(res))
   *   .catch(e => console.log(e));
   * ```
   * @param path {string} The Graph API endpoint path that you want to call.
   * @param [method=get] {string} The HTTP method that you want to use for the API request.
   * @param [params] {Object} An object consisting of any parameters that you want to pass into your Graph API call.
   * @returns {Promise<any>}
   */
  api(path: string, method: ApiMethod = 'get', params: any = {}): Promise<any> {
    return new Promise<any>((resolve, reject) => {

      FB.api(path, method, params, (response: any) => {
        if(!response){
          reject();
        }else if(response.error){
          reject(response.error);
        }else{
          resolve(response);
        }
      });

    });
  }

  /**
   * This method is used to trigger different forms of Facebook created UI dialogs.
   * These dialogs include:
   * - Share dialog
   * - Login dialog
   * - Add page tab dialog
   * - Requests dialog
   * - Send dialog
   * - Payments dialog
   * - Go Live dialog
   * @param params A collection of parameters that control which dialog is loaded, and relevant settings.
   * @returns {Promise<FacebookUiResponse>}
   */
  ui(params: UIParams): Promise<UIResponse> {
    return new Promise<any>((resolve, reject) => {

      FB.ui(params, (response: any) => {
        if(!response) reject();
        else if(response.error) reject(response.error);
        else resolve(response);
      });

    });
  }

  /**
   * This method allows you to determine if a user is logged in to Facebook and has authenticated your app.
   * @returns {Promise<FacebookLoginStatus>}
   */
  getLoginStatus(): Promise<LoginStatus> {
    return new Promise<LoginStatus>((resolve, reject) => {

      FB.getLoginStatus((response: LoginStatus) => {
        if (!response) {
          reject();
        } else {
          resolve(response);
        }
      });

    });
  }

  /**
   * Login the user
   * @param [options] {LoginOptions}
   * @returns {Promise<FacebookLoginResponse>}
   */
  login(options?: LoginOptions): Promise<LoginResponse> {
    return new Promise<LoginResponse>((resolve, reject) => {

      FB.login((response: LoginResponse) => {
        if (response.authResponse) {
          resolve(response);
        }else{
          reject();
        }
      }, options);

    });
  }

  /**
   * Logout the user
   * @returns {Promise<any>}
   */
  logout(): Promise<any> {
    return new Promise<any>((resolve) => {

      FB.logout((response: any) => {
        resolve(response);
      });

    });
  }

  /**
   * This synchronous function returns back the current authResponse.
   * @returns {FacebookAuthResponse}
   */
  getAuthResponse(): AuthResponse {
    return <AuthResponse>FB.getAuthResponse();
  }

}

