import { Component, Input, ElementRef, Renderer } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from './fbml-component';

/**
 * @name Like Button
 * @shortdesc Like button component
 * @description
 * A single click on the Like button will 'like' pieces of content on the web and share them on Facebook.
 * You can also display a Share button next to the Like button to let people add a personal message and customize who they share with.
 * @usage
 * ```html
 * <fb-like href="https://www.facebook.com/zuck"></fb-like>
 * ```
 */
@Component({
  selector: 'fb-like',
  template: ''
})
export class FBLikeComponent extends FBMLComponent {

  @Input()
  @FBMLAttribute
  action: string;

  @Input()
  @FBMLAttribute
  colorScheme: string;

  @Input()
  @FBMLAttribute
  href: string;

  @Input()
  @FBMLAttribute
  kidDirectedSite: boolean;

  @Input()
  @FBMLAttribute
  layout: string;

  @Input()
  @FBMLAttribute
  ref: string;

  @Input()
  @FBMLAttribute
  share: boolean;

  @Input()
  @FBMLAttribute
  showFaces: boolean;

  @Input()
  @FBMLAttribute
  size: string;

  @Input()
  @FBMLAttribute
  width: string;

  constructor(el: ElementRef, rnd: Renderer) {
    super(el, rnd, 'fb-like');
  }

}
