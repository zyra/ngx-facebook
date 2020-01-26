import { ElementRef, Renderer2 } from '@angular/core';
import { FBMLComponent } from '../fbml-component';
/**
 * @name Save Button
 * @shortdesc Save button component.
 * @fbdoc https://developers.facebook.com/docs/plugins/save
 * @description
 * The Save button lets people save items or services to a private list on Facebook, share it with friends, and receive relevant notifications.
 * @usage
 * ```html
 * <fb-save uri="https://github.com/zyra/ng2-facebook-sdk/"></fb-save>
 * ```
 */
export declare class FBSaveComponent extends FBMLComponent {
    /**
     * The absolute link of the page that will be saved.
     * Current Link/Address
     */
    uri: string;
    constructor(el: ElementRef, rnd: Renderer2);
}
