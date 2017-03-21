import { AuthResponse } from './auth-response';

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
