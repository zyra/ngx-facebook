import {Injectable} from '@angular/core';

declare var FB: any;

@Injectable()
export class FacebookService {

    init(params: FacebookInitParams): void {
        FB.init(params);
    }

    api(path: string, method?: FacebookMethods = 'get', params?: any = {}): Promise<any> {
        return new Promise<any>(
            (resolve, reject) => {
                FB.api(path, method, params, () => {

                });
            }
        );
    }

}

export type FacebookMethods = 'get' | 'post' | 'delete';
export interface FacebookInitParams {
    appId?: string;
    version: string;
    cookie?: boolean;
    status?: boolean;
    xfbml?: boolean;
    frictionlessRequests?: boolean;
    hideFlashCallback?: any;
}