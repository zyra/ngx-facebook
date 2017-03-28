import { Component, Input, ElementRef, Renderer } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from './fbml-component';

/**
 * @name Comments
 * @shortdesc Comments component
 * @description
 * The comments plugin lets people comment on content on your site using their Facebook account.
 * People can choose to share their comment activity with their friends (and friends of their friends) on Facebook as well.
 * The comments plugin also includes built-in moderation tools and social relevance ranking.
 *
 * @usage
 * ```html
 * <fb-comments></fb-components>
 * ```
 */
@Component({
  selector: 'fb-comments',
  template: ''
})
export class FBCommentsComponent extends FBMLComponent {

  @Input()
  @FBMLAttribute
  colorscheme: string;

  @Input()
  @FBMLAttribute
  href: string;

  @Input()
  @FBMLAttribute
  mobile: boolean;

  @Input()
  @FBMLAttribute
  numposts: number;

  @Input()
  @FBMLAttribute
  orderBy: string;

  @Input()
  @FBMLAttribute
  width: string;

  constructor(
    el: ElementRef,
    rnd: Renderer
  ) {
    super(el, rnd, 'fb-comments');
  }

}
