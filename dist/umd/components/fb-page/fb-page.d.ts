import { ElementRef, Renderer2 } from '@angular/core';
import { FBMLComponent } from '../fbml-component';
/**
 * @name Page Plugin
 * @shortdesc Page plugin component
 * @fbdoc https://developers.facebook.com/docs/plugins/page-plugin
 * @description
 * The Page plugin lets you easily embed and promote any Facebook Page on your website. Just like on Facebook, your visitors can like and share the Page without leaving your site.
 * @usage
 * ```html
 * <fb-page href="https://facebook.com/facebook"></fb-page>
 * ```
 */
export declare class FBPageComponent extends FBMLComponent {
    /**
     * The URL of the Facebook Page
     */
    href: string;
    /**
     * The pixel width of the plugin. Min. is `180` & Max. is `500`.
     * Defaults to `340`.
     */
    width: number;
    /**
     * The pixel height of the plugin. Min. is `70`.
     * Defaults to `500`.
     */
    height: number;
    /**
     * Tabs to render i.e. `timeline`, `events`, `messages`. Use a comma-separated list to add multiple tabs, i.e. `timeline`, `events`.
     * Defaults to `timeline`.
     */
    tabs: string;
    /**
     * Hide cover photo in the header.
     * Defaults to `false`.
     */
    hideCover: boolean;
    /**
     * Show profile photos when friends like this.
     * Defaults to `true`.
     */
    showFacepile: boolean;
    /**
     * Hide the custom call to action button (if available).
     * Default to `false`.
     */
    hideCTA: boolean;
    /**
     * Use the small header instead.
     * Defaults to `false`.
     */
    smallHeader: boolean;
    /**
     * Try to fit inside the container width.
     * Defaults to `true`.
     */
    adaptContainerWidth: boolean;
    constructor(el: ElementRef, rnd: Renderer2);
}
