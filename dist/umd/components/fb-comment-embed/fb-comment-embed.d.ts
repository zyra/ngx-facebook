import { ElementRef, Renderer2 } from '@angular/core';
import { FBMLComponent } from '../fbml-component';
/**
 * @name Embedded Comments
 * @shortdesc Embedded comments component
 * @fbdoc https://developers.facebook.com/docs/plugins/embedded-comments
 * @description
 * Embedded comments are a simple way to put public post comments - by a Page or a person on Facebook - into the content of your web site or web page.
 * Only public comments from Facebook Pages and profiles can be embedded.
 * @usage
 * ```html
 * <fb-comment-embed href="https://www.facebook.com/zuck/posts/10102735452532991?comment_id=1070233703036185" width="500"></fb-comment-embed>
 * ```
 */
export declare class FBCommentEmbedComponent extends FBMLComponent {
    /**
     * The absolute URL of the comment.
     */
    href: string;
    /**
     * The width of the embedded comment container. Min. `220px`. Defaults to `560px`.
     */
    width: string;
    /**
     * Set to `true` to include parent comment (if URL is a reply). Defaults to `false`.
     */
    includeParent: boolean;
    constructor(el: ElementRef, rnd: Renderer2);
}
