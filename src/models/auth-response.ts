/**
 * The response object returned by the [getAuthResponse](../FacebookService/#getAuthResponse) method, and is also used in [LoginResponse](../LoginResponse/) and [LoginStatus](../LoginStatus/).
 */
export interface AuthResponse {
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
