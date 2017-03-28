import { Component, Input, ElementRef, Renderer } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from './fbml-component';

/**
 * @name Page Plugin
 * @shortdesc Page plugin component
 * @description
 * The Page plugin lets you easily embed and promote any Facebook Page on your website. Just like on Facebook, your visitors can like and share the Page without leaving your site.
 * @usage
 * ```html
 * <fb-page href="https://facebook.com/facebook"></fb-page>
 * ```
 */
@Component({
  selector: 'fb-page',
  template: ''
})
export class FBPageComponent extends FBMLComponent {

  @Input()
  @FBMLAttribute
  href: string;

  @Input()
  @FBMLAttribute
  width: string;

  @Input()
  @FBMLAttribute
  height: string;

  @Input()
  @FBMLAttribute
  tabs: string;

  @Input()
  @FBMLAttribute
  hideCover: boolean;

  @Input()
  @FBMLAttribute
  showFacepile: boolean;

  @Input()
  @FBMLAttribute
  hideCTA: boolean;

  @Input()
  @FBMLAttribute
  smallHeader: boolean;

  @Input()
  @FBMLAttribute
  adaptContainerWidth: boolean;

  constructor(
    el: ElementRef,
    rnd: Renderer
  ) {
    super(el, rnd, 'fb-page');
  }

}
