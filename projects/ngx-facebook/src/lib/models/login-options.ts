/**
 * Options that can be passed to the [login](../facebook-service/#login) method.
 */
export interface LoginOptions {
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
