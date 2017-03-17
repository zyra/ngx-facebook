import { AuthResponse } from './auth-response';

export interface LoginResponse {
    authResponse: AuthResponse;
    status: string;
}
