import { Component, Input, ElementRef, Renderer } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from './fbml-component';

/**
 * @name Embedded Post
 * @shortdesc Embedded post component
 * @description
 * Embedded Posts are a simple way to put public posts - by a Page or a person on Facebook - into the content of your web site or web page.
 * Only public posts from Facebook Pages and profiles can be embedded.
 * @usage
 * ```html
 * <fb-post href=""></fb-post>
 * ```
 */
@Component({
  selector: 'fb-post',
  template: ''
})
export class FBPostComponent extends FBMLComponent {

  /**
   * The absolute URL of the post.
   */
  @Input()
  @FBMLAttribute
  href: string;

  /**
   * The width of the post. Min. `350` pixel; Max. `750` pixel. Set to auto to use fluid width. Defaults to `auto`.
   */
  @Input()
  @FBMLAttribute
  width: string;

  /**
   * Applied to photo post. Set to `true` to include the text from the Facebook post, if any. Defaults to `false`.
   */
  @Input()
  @FBMLAttribute
  showText: boolean;

  constructor(
    el: ElementRef,
    rnd: Renderer
  ) {
    super(el, rnd, 'fb-post');
  }

}
