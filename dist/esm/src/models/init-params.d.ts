/**
 * This is the configuration that can be passed to the [init](../facebook-service/#init) method.
 */
export interface InitParams {
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
    /**
     * Determines whether events related to user interaction with the app are collected automatically. Defaults to true.
     */
    autoLogAppEvents?: boolean;
}
