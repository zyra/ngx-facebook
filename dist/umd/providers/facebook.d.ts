import { AuthResponse } from '../models/auth-response';
import { InitParams } from '../models/init-params';
import { LoginOptions } from '../models/login-options';
import { LoginResponse } from '../models/login-response';
import { LoginStatus } from '../models/login-status';
import { UIParams } from '../models/ui-params';
import { UIResponse } from '../models/ui-response';
/**
 * @hidden
 */
export declare type ApiMethod = 'get' | 'post' | 'delete';
/**
 * @shortdesc
 * Angular 2 service to inject to use Facebook's SDK
 * @description
 * You only need to inject this service in your application if you aren't using [`FacebookModule`](../facebook-module).
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
export declare class FacebookService {
    /**
     * This method is used to initialize and setup the SDK.
     * @param params {InitParams} Initialization parameters
     * @returns {Promise<any>}
     */
    init(params: InitParams): Promise<any>;
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
    api(path: string, method?: ApiMethod, params?: any): Promise<any>;
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
     * @param params {UIParams} A collection of parameters that control which dialog is loaded, and relevant settings.
     * @returns {Promise<UIResponse>}
     */
    ui(params: UIParams): Promise<UIResponse>;
    /**
     * This method allows you to determine if a user is logged in to Facebook and has authenticated your app.
     * @param [forceFreshResponse=false] {boolean} Force a fresh response.
     * @returns {Promise<LoginStatus>}
     */
    getLoginStatus(forceFreshResponse?: boolean): Promise<LoginStatus>;
    /**
     * Login the user
     * @usage
     * ```typescript
     * // login without options
     * this.fb.login()
     *   .then((response: LoginResponse) => console.log('Logged in', response))
     *   .catch(e => console.error('Error logging in'));
     *
     * // login with options
     * const options: LoginOptions = {
     *   scope: 'public_profile,user_friends,email,pages_show_list',
     *   return_scopes: true,
     *   enable_profile_selector: true
     * };
     * this.fb.login(options)
     *   .then(...)
     *   .catch(...);
     * ```
     * @param [options] {LoginOptions} Login options
     * @returns {Promise<LoginResponse>} returns a promise that resolves with [LoginResponse](../login-response) object, or rejects with an error
     */
    login(options?: LoginOptions): Promise<LoginResponse>;
    /**
     * Logout the user
     * @usage
     * ```typescript
     * this.fb.logout().then(() => console.log('Logged out!'));
     * ```
     * @returns {Promise<any>} returns a promise that resolves when the user is logged out
     */
    logout(): Promise<any>;
    /**
     * This synchronous function returns back the current authResponse.
     * @usage
     * ```typescript
     * import { AuthResponse, FacebookService } from 'ng2-facebook-sdk';
     *
     * ...
     *
     * const authResponse: AuthResponse = this.fb.getAuthResponse();
     * ```
     * @returns {AuthResponse} returns an [AuthResponse](../auth-response) object
     */
    getAuthResponse(): AuthResponse;
}
