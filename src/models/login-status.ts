import { AuthResponse } from './auth-response';

export interface LoginStatus {
    status: string;
    authResponse: AuthResponse;
}