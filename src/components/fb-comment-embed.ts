import { Component, Input, ElementRef, Renderer } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from './fbml-component';

@Component({
  selector: 'fb-comment-embed',
  template: ''
})
export class FBCommentEmbedComponent extends FBMLComponent {

  /**
   * The absolute URL of the comment.
   */
  @Input()
  @FBMLAttribute
  href: string;

  /**
   * The width of the embedded comment container. Min. `220px`. Defaults to `560px`.
   */
  @Input()
  @FBMLAttribute
  width: string;

  /**
   * Set to `true` to include parent comment (if URL is a reply). Defaults to `false`.
   */
  @Input()
  @FBMLAttribute
  includeParent: boolean;

  constructor(
    el: ElementRef,
    rnd: Renderer
  ) {
    super(el, rnd, 'fb-comment-embed');
  }

}
