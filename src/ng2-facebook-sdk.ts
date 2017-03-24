import { Injectable } from '@angular/core';

declare var FB: any;

// TODO create an interface (type) for the response instead of any

@Injectable()
export class FacebookService {
  /**
   * This method is used to initialize and setup the SDK.
   * @param params
   */
  init(params: FacebookInitParams): void {
    try {
      FB.init(params);
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * This method lets you make calls to the Graph API
   * @param path This is the Graph API endpoint path that you want to call.
   * @param method This is the HTTP method that you want to use for the API request.
   * @param params This is an object consisting of any parameters that you want to pass into your Graph API call.
   * @returns {Promise<any>}
   */
  api(path: string, method: FacebookApiMethod = 'get', params: any = {}): Promise<any> {
    return new Promise<any>(
      (resolve, reject) => {
        try {
          FB.api(path, method, params, (response: any) => {
            if(!response){
              reject();
            }else if(response.error){
              reject(response.error);
            }else{
              resolve(response);
            }
          });
        } catch (err) {
          reject(err);
        }
      }
    );
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
  ui(params: FacebookUiParams): Promise<FacebookUiResponse> {
    return new Promise<any>(
      (resolve, reject) => {
        try {
          FB.ui(params, (response: any) => {
            if(!response) reject();
            else if(response.error) reject(response.error);
            else resolve(response);
          });
        } catch (err) {
          reject(err);
        }
      }
    );
  }

  /**
   * This method allows you to determine if a user is logged in to Facebook and has authenticated your app.
   * @returns {Promise<FacebookLoginStatus>}
   */
  getLoginStatus(): Promise<FacebookLoginStatus> {
    return new Promise<FacebookLoginStatus>(
      (resolve, reject) => {
        try {
          FB.getLoginStatus((response: FacebookLoginStatus) => {
            if(!response) reject();
            else resolve(response);
          });
        } catch (err) {
          reject(err);
        }
      }
    );
  }

  /**
   * Login the user
   * @param options
   * @returns {Promise<FacebookLoginResponse>}
   */
  login(options?: FacebookLoginOptions): Promise<FacebookLoginResponse> {
    return new Promise<FacebookLoginResponse>(
      (resolve, reject) => {
        try {
          FB.login((response: FacebookLoginResponse) => {
            if(response.authResponse) {
              resolve(response);
            }else{
              reject();
            }
          }, options);
        } catch (err) {
          reject(err);
        }
      }
    );
  }

  /**
   * Logout the user
   * @returns {Promise<any>}
   */
  logout(): Promise<any> {
    return new Promise<any>(
      (resolve, reject) => {
        try {
          FB.logout((response: any) => {
            resolve(response);
          });
        } catch (err) {
          reject(err);
        }
      }
    );
  }

  /**
   * This synchronous function returns back the current authResponse.
   * @returns {FacebookAuthResponse}
   */
  getAuthResponse(): FacebookAuthResponse {
    try {
      return <FacebookAuthResponse>FB.getAuthResponse();
    } catch (err) {
      console.error(err);
    }
  }

}

export interface FacebookInitParams {
  /**
   * Your application ID. If you don't have one find it in the App dashboard or go there to create a new app. Defaults to null.
   */
  appId?: string;

  /**
   * Determines which versions of the Graph API and any API dialogs or plugins are invoked when using the .api() and .ui() functions. Valid values are determined by currently available versions, such as 'v2.0'. This is a required parameter.
   */
  version: string;

  /**
   * Determines whether a cookie is created for the session or not. If enabled, it can be accessed by server-side code. Defaults to false.
   */
  cookie?: boolean;

  /**
   * Determines whether the current login status of the user is freshly retrieved on every page load. If this is disabled, that status will have to be manually retrieved using .getLoginStatus(). Defaults to false.
   */
  status?: boolean;

  /**
   * Determines whether XFBML tags used by social plugins are parsed, and therefore whether the plugins are rendered or not. Defaults to false.
   */
  xfbml?: boolean;

  /**
   * Frictionless Requests are available to games on Facebook.com or on mobile web using the JavaScript SDK. This parameter determines whether they are enabled. Defaults to false.
   */
  frictionlessRequests?: boolean;

  /**
   * This specifies a function that is called whenever it is necessary to hide Adobe Flash objects on a page. This is used when .api() requests are made, as Flash objects will always have a higher z-index than any other DOM element. See our Custom Flash Hide Callback for more details on what to put in this function. Defaults to null.
   */
  hideFlashCallback?: any;
}

export type FacebookApiMethod = 'get' | 'post' | 'delete';

export interface ShareDialogParams {
  /**
   * The link attached to this post. Required when using method share. Include open graph meta tags in the page at this URL to customize the story that is shared.
   * Defaults to Current URL
   */
  href?: string;

  /**
   * A hashtag specified by the developer to be added to the shared content. People will still have the opportunity to remove this hashtag in the dialog. The hashtag should include the hash symbol, e.g. #facebook.
   */
  hashtag?: string;

  /**
   * A quote to be shared along with the link, either highlighted by the user or predefined by the developer, as in a pull quote on an article.
   */
  quote?: string;

  /**
   * If set to true the share button will open the share dialog in an iframe on top of your website (For more information see Mobile Web Share Dialog. This option is only available for mobile, not desktop.
   */
  mobile_iframe?: string;

  /**
   * A string specifying which Open Graph action type to publish, e.g., og.likes for the built in like type. The dialog also supports approved custom types. Required when using method share_open_graph.
   */
  action_type?: string;

  /**
   * A JSON object of key/value pairs specifying parameters which correspond to the action_type being used. Valid key/value pairs are the same parameters that can be used when publishing Open Graph Actions using the API. Required when using method share_open_graph.
   */
  action_properties?: string;
}

export interface ShareDialogResponse {

  /**
   * Only available if the user is logged into your app using Facebook and has granted publish_actions. If present, this is the ID of the published Open Graph story.
   */
  post_id?: string;

  /**
   * Only available if the user is logged into your app using Facebook Login.
   */
  error_message?: string;

}

export interface FeedDialogParams {
  /**
   * The ID of the person posting the message. If this is unspecified, it defaults to the current person. If specified, it must be the ID of the person or of a page that the person administers.
   */
  from?: string;

  /**
   * The ID of the profile that this story will be published to. If this is unspecified, it defaults to the value of from. The ID must be a friend who also uses your app.
   */
  to?: string;

  /**
   * The link attached to this post. With the Feed Dialog, people can also share plain text status updates with no content from your app; just leave the link parameter empty.
   */
  link?: string;

  /**
   * The URL of a picture attached to this post. The picture must be at least 200px by 200px. See our documentation on sharing best practices for more information on sizes
   */
  picture?: string;

  /**
   * The URL of a media file (either SWF or MP3) attached to this post. If SWF, you must also specify picture to provide a thumbnail for the video.
   */
  source?: string;

  /**
   * The name of the link attachment.
   */
  name?: string;

  /**
   * The caption of the link (appears beneath the link name). If not specified, this field is automatically populated with the URL of the link.
   */
  caption?: string;

  /**
   * The description of the link (appears beneath the link caption). If not specified, this field is automatically populated by information scraped from the link, typically the title of the page.
   */
  description?: string;

  /**
   * This argument is a comma-separated list, consisting of at most 5 distinct items, each of length at least 1 and at most 15 characters drawn from the set '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_'. Each category is used in Facebook Insights to help you measure the performance of different types of post
   */
  ref?: string;
}

export interface FeedDialogResponse {

  /**
   * The ID of the posted story, if the person chose to publish to their timeline.
   */
  post_id?: string;

}

export interface SendDialogParams {

  /**
   * A user ID of a recipient. Once the dialog comes up, the sender can specify additional people as recipients.
   */
  to?: string;

  /**
   * Required parameter. The URL that is being sent in the message.
   */
  link?: string;
}

export interface FacebookUiParams extends ShareDialogParams, FeedDialogParams, SendDialogParams {

  /**
   * The UI dialog that is being invoked. This is a required field.
   */
  method: any;

  /**
   * The UI dialog message.
   */
  message?: string;

  /**
   * Your app's unique identifier. Required.
   */
  app_id?: string;

  /**
   * The URL to redirect to after a person clicks a button on the dialog. Required when using URL redirection.
   */
  redirect_uri?: string;

  /**
   * Determines how the dialog is rendered.
   * - If you are using the URL redirect dialog implementation, then this will be a full page display, shown within Facebook.com. This display type is called page
   * - If you are using one of our iOS or Android SDKs to invoke the dialog, this is automatically specified and chooses an appropriate display type for the device.
   * - If you are using the Facebook SDK for JavaScript, this will default to a modal iframe type for people logged into your app or async when using within a game on Facebook.com, and a popup window for everyone else. You can also force the popup type when when you use the Facebook SDK for JavaScript, if necessary.
   * - Mobile web apps will always default to the touch display type.
   */
  display?: string;

  /**
   * - Dialog in create phase allows you to get stream url to upload video; Dialog in publish phase will provide preview and go live button. required
   * - phase = create | publish
   */
  phase?: string;

  /**
   * - This parameter is required for publish phase.
   * - The response object returned from either API or create phase.
   */
  broadcast_data?: any;

}

export interface FacebookUiResponse extends ShareDialogResponse, FeedDialogResponse { }


export interface FacebookAuthResponse {
  /**
   * User access token
   */
  accessToken: string;
  /**
   * Access token lifetime in seconds
   */
  expiresIn: number;
  /**
   *
   */
  signedRequest: string;
  /**
   * The Facebook user ID
   */
  userID: string;
  /**
   * The granted scopes. This field is only available if you set `return_scopes` to true when calling login method.
   */
  grantedScopes?: string;
}

export interface FacebookLoginStatus {
  status: string;
  authResponse: FacebookAuthResponse;
}

export interface FacebookLoginOptions {
  /**
   * Optional key, only supports one value: rerequest. Use this when re-requesting a declined permission.
   */
  auth_type?: string;
  /**
   * Comma separated list of extended permissions
   */
  scope?: string;
  /**
   * When true, the granted scopes will be returned in a comma-separated list.
   */
  return_scopes?: boolean;
  /**
   * When true, prompt the user to grant permission for one or more Pages.
   */
  enable_profile_selector?: boolean;
  /**
   * Comma separated list of IDs to display in the profile selector
   */
  profile_selector_ids?: string;
}

export interface FacebookLoginResponse {
  authResponse: FacebookAuthResponse;
  status: string;
}
