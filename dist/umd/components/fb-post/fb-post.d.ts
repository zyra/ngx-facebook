import { ElementRef, Renderer2 } from '@angular/core';
import { FBMLComponent } from '../fbml-component';
/**
 * @name Embedded Posts
 * @shortdesc Embedded post component
 * @fbdoc https://developers.facebook.com/docs/plugins/embedded-posts
 * @description
 * Embedded Posts are a simple way to put public posts - by a Page or a person on Facebook - into the content of your web site or web page.
 * Only public posts from Facebook Pages and profiles can be embedded.
 * @usage
 * ```html
 * <fb-post href="https://www.facebook.com/20531316728/posts/10154009990506729/"></fb-post>
 * ```
 */
export declare class FBPostComponent extends FBMLComponent {
    /**
     * The absolute URL of the post.
     */
    href: string;
    /**
     * The width of the post. Min. `350` pixel; Max. `750` pixel. Set to auto to use fluid width. Defaults to `auto`.
     */
    width: string;
    /**
     * Applied to photo post. Set to `true` to include the text from the Facebook post, if any. Defaults to `false`.
     */
    showText: boolean;
    constructor(el: ElementRef, rnd: Renderer2);
}
