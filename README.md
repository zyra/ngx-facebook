[![npm](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/ng2-facebook-sdk)

[![NPM](https://nodei.co/npm/ng2-facebook-sdk.png?stars&downloads)](https://nodei.co/npm/ng2-facebook-sdk/)


# Angular2 Facebook SDK
This is a wrapper for the official Facebook JavaScript SDK. You must still include their JavaScript files in your project. This wrapper makes it easier to use Facebook SDK with Angular2 by providing types and promises.

- [Installation](#installation)
- [Example Usage](#example-usage)
- [Methods](#methods)
    - [init](#init)
    - [api](#api)
    - [ui](#ui)
    - [getLoginStatus](#getLoginStatus)
    - [login](#login)
    - [logout](#logout)
    - [getAuthResponse](#getAuthResponse)
- [Interfaces](#interfaces)
    - [FacebookInitParams](#facebookinitparams)
    - [FacebookApiMethod (enum)](#facebookapimethod-enum)
    - [FacebookUiParams](#facebookuiparams)
    - [FacebookAuthResponse](#facebookauthresponse)
    - [FacebookLoginStatus](#facebookloginstatus)
    - [FacebookLoginOptions](#facebookloginoptions)
    - [FacebookLoginResponse](#facebookloginresponse)


## Installation
- Install via NPM:
```
npm i --save-dev ng2-facebook-sdk
```

- Add the Facebook JavaScript SDK to your index.html
```
<script type="text/javascript" src="https://connect.facebook.net/en_US/sdk.js"></script>
```


## Example Usage
```typescript
import {FacebookService, FacebookLoginResponse} from 'ng2-facebook-sdk';

@Component({
  templateUrl: '/path/to/template.html',
  providers: [FacebookService]
})
export class MyComponent {
  constructor(private fb: FacebookService) { }

  someFunction(): void {
    this.fb.login().then(
      (response: FacebookLoginResponse) => console.log(response),
      (error: any) => console.error(error)
    );
  }
}
```


# Methods

## init

This method is used to initialize and setup the SDK.

**Parameters**

-   `params`

#### Example
```typescript
import {FacebookService, FacebookInitParams} from 'ng2-facebook-sdk';

@Component(...)
export class MyComponent {
  constructor(private fb: FacebookService) {
    let fbParams: FacebookInitParams = {
                                   appId: '1234566778',
                                   xfbml: true,
                                   version: 'v2.6'
                                   };
    this.fb.init(fbParams);
  }
}
```


## api

This method lets you make calls to the Graph API

**Parameters**

-   `path`  This is the Graph API endpoint path that you want to call.
-   `method`  This is the HTTP method that you want to use for the API request.
-   `params`  This is an object consisting of any parameters that you want to pass into your Graph API call.

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;any>**

## ui

This method is used to trigger different forms of Facebook created UI dialogs.
These dialogs include:

-   Share dialog
-   Login dialog
-   Add page tab dialog
-   Requests dialog
-   Send dialog
-   Payments dialog
-   Go Live dialog

**Parameters**

-   `params`  A collection of parameters that control which dialog is loaded, and relevant settings.

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;FacebookUiResponse>**

## getLoginStatus

This method allows you to determine if a user is logged in to Facebook and has authenticated your app.

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;FacebookLoginStatus>**

## login

Login the user

**Parameters**

-   `options`

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;FacebookLoginResponse>**

## logout

Logout the user

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;any>**

## getAuthResponse

This synchronous function returns back the current authResponse.

Returns **FacebookAuthResponse**


#### init(params: FacebookInitParams): void
This method is used to initialize and setup the SDK.




# Interfaces
## FacebookInitParams
Name    |   Type    |   Description
--------|-----------|--------------
appId   | `string`  |   Your application ID. If you don't have one find it in the App dashboard or go there to create a new app. **Defaults to `null`**.
version   | `string`  |   Determines which versions of the Graph API and any API dialogs or plugins are invoked when using the `.api()` and `.ui()` functions. Valid values are determined by currently available versions, such as 'v2.0'. **This is a required parameter**.
cookie   | `boolean`  |   Determines whether a cookie is created for the session or not. If enabled, it can be accessed by server-side code. **Defaults to `false`**.
status   | `boolean`  |   Determines whether the current login status of the user is freshly retrieved on every page load. If this is disabled, that status will have to be manually retrieved using `.getLoginStatus()`. **Defaults to `false`**.
xfbml   | `boolean`  |   Determines whether XFBML tags used by social plugins are parsed, and therefore whether the plugins are rendered or not. **Defaults to `false`**.
frictionlessRequests   | `boolean`  |   Frictionless Requests are available to games on Facebook.com or on mobile web using the JavaScript SDK. This parameter determines whether they are enabled. **Defaults to `false`**.
hideFlashCallback   | `function`  |   This specifies a function that is called whenever it is necessary to hide Adobe Flash objects on a page. This is used when `.api()` requests are made, as Flash objects will always have a higher `z-index` than any other DOM element. See our Custom Flash Hide Callback for more details on what to put in this function. **Defaults to `null`**.

## FacebookApiMethod (enum)
Name    |   Description
--------|--------------
get |   Get request
post | Post request
delete | Delete request

## FacebookUiParams

## FacebookAuthResponse
Name    |   Type    |   Description
--------|-----------|--------------
accessToken|`string`|User access token
expiresIn|`number`|Access token lifetime in seconds
signedRequest|`string`|
userID|`string`|The Facebook user ID

## FacebookLoginStatus
Name    |   Type    |   Description
--------|-----------|--------------
status|`string`|Status
authResponse|`FacebookAuthResponse`| Facebook AuthResponse object

###FacebookLoginOptions
Name    |   Type    |   Description
--------|-----------|--------------
auth_type|`string`|
scope|`string`|
return_scopes|`boolean`|
enable_profile_selector|`boolean`|
profile_selector_ids|`string`|

## FacebookLoginResponse
Name    |   Type    |   Description
--------|-----------|--------------
authResponse|`FacebookAuthResponse`|
status|`string`|
