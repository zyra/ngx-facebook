import { ElementRef, Renderer2 } from '@angular/core';
import { FBMLComponent } from '../fbml-component';
/**
 * @name Follow Button
 * @shortdesc Follow button component
 * @fbdoc https://developers.facebook.com/docs/plugins/follow-button
 * @description The Follow button lets people subscribe to the public updates of others on Facebook.
 * @usage
 * ```html
 * <fb-follow href="https://www.facebook.com/zuck"></fb-follow>
 * ```
 */
export declare class FBFollowComponent extends FBMLComponent {
    /**
     * The color scheme used by the plugin. Can be `light` or `dark`. Defaults to `light`.
     */
    colorScheme: string;
    /**
     * The Facebook.com profile URL of the user to follow.
     */
    href: string;
    /**
     * If your web site or online service, or a portion of your service, is directed to children under 13 you must enable this. Defaults to `false`.
     */
    kidDirectedSite: boolean;
    /**
     * Selects one of the different layouts that are available for the plugin. Can be one of `standard`, `button_count`, or `box_count`.
     * Defaults to `standard`.
     */
    layout: string;
    /**
     * Specifies whether to display profile photos below the button. Defaults to `false`.
     */
    showFaces: string;
    /**
     * The button is offered in 2 sizes i.e. `large` and `small`. Defaults to `small`.
     */
    size: string;
    /**
     * The width of the plugin. The layout you choose affects the minimum and default widths you can use.
     */
    width: string;
    constructor(el: ElementRef, rnd: Renderer2);
}
