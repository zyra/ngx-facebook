/**
 * Response object received after a Feed dialog is closed
 */
export interface FeedDialogResponse {
    /**
     * The ID of the posted story, if the person chose to publish to their timeline.
     */
    post_id?: string;
}
/**
 * Response object received after a share dialog is closed
 */
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
export interface UIResponse extends ShareDialogResponse, FeedDialogResponse {
}
