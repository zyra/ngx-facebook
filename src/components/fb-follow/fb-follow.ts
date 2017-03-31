import { Component, Input, ElementRef, Renderer } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from '../fbml-component';

/**
 * @name Follow Button
 * @shortdesc Follow button component
 * @fbdoc https://developers.facebook.com/docs/plugins/follow-button
 * @description The Follow button lets people subscribe to the public updates of others on Facebook.
 * @usage
 * ```html
 * <fb-follow href=""></fb-follow>
 * ```
 */
@Component({
  selector: 'fb-follow',
  template: ''
})
export class FBFollowComponent extends FBMLComponent {

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
  showFaces: string;

  @Input()
  @FBMLAttribute
  size: string;

  @Input()
  @FBMLAttribute
  width: string;

  constructor(
    el: ElementRef,
    rnd: Renderer
  ) {
    super(el, rnd, 'fb-follow');
  }

}
