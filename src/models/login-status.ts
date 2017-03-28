import { AuthResponse } from './auth-response';

/**
 * The object returned by the [getLoginStatus](../FacebookService/#getLoginStatus) method.
 */
export interface LoginStatus {
  /**
   * Status as a string
   */
  status: string;
  /**
   * Auth response object
   */
  authResponse: AuthResponse;
}
