import { ElementRef, Renderer2 } from '@angular/core';
import { FBMLComponent } from '../fbml-component';
/**
 * @name Comments
 * @shortdesc Comments component
 * @fbdoc https://developers.facebook.com/docs/plugins/comments
 * @description
 * The comments plugin lets people comment on content on your site using their Facebook account.
 * People can choose to share their comment activity with their friends (and friends of their friends) on Facebook as well.
 * The comments plugin also includes built-in moderation tools and social relevance ranking.
 *
 * @usage
 * ```html
 * <fb-comments></fb-comments>
 * ```
 */
export declare class FBCommentsComponent extends FBMLComponent {
    /**
     * The color scheme used by the comments plugin. Can be `light` or `dark`. Defaults to `light`.
     */
    colorscheme: string;
    /**
     * The absolute URL that comments posted in the plugin will be permanently associated with.
     * All stories shared on Facebook about comments posted using the comments plugin will link to this URL.
     * Defaults to current URL.
     */
    href: string;
    /**
     * A boolean value that specifies whether to show the mobile-optimized version or not. If no value is given, it will be automatically detected.
     */
    mobile: boolean;
    /**
     * The number of comments to show by default. The minimum value is `1`. Defaults to `10`.
     */
    numposts: number;
    /**
     * The order to use when displaying comments. Can be `social`, `reverse_time`, or `time`. The different order types are explained [in the FAQ](https://developers.facebook.com/docs/plugins/comments#faqorder). Defaults to `social`
     */
    orderBy: string;
    /**
     * The width of the comments plugin on the webpage.
     * This can be either a pixel value or a percentage (such as 100%) for fluid width.
     * The mobile version of the comments plugin ignores the width parameter and instead has a fluid width of 100%.
     * The minimum width supported by the comments plugin is 320px.
     * Defaults to `550px`.
     */
    width: string;
    constructor(el: ElementRef, rnd: Renderer2);
}
