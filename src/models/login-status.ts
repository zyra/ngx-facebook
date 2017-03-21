import { AuthResponse } from './auth-response';

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
