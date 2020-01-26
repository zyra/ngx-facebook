/**
 * Params that can be passed when creating a Share dialog.
 */
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
/**
 * Params that can be passed when creating a Feed dialog.
 */
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
/**
 * Params that can be passed when creating a send dialog
 */
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
/**
 * The object passed to the [ui](../facebook-service/#ui) method. The properties below can be passed to all three types of dialogs. Each type of dialog accepts additional parameters that are documented above.
 */
export interface UIParams extends ShareDialogParams, FeedDialogParams, SendDialogParams {
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
