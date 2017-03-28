import { AuthResponse } from './auth-response';

/**
 * Object returned by the [login](../FacebookService/#login) method.
 */
export interface LoginResponse {
  /**
   * Auth Response object
   */
  authResponse: AuthResponse;
  /**
   * Status as string
   */
  status: string;
}
