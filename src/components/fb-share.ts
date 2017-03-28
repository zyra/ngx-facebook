import { Component, Input, ElementRef, Renderer } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from './fbml-component';

@Component({
  selector: 'fb-share',
  template: ''
})
export class FBShareComponent extends FBMLComponent {

  /**
   * The absolute URL of the page that will be shared. Defaults to the current URL.
   */
  @Input()
  @FBMLAttribute
  href: string;

  /**
   * Selects one of the different layouts that are available for the plugin. Can be one of `box_count`, `button_count`, `button`. Defaults to `icon_link`.
   */
  @Input()
  @FBMLAttribute
  layout: string;

  /**
   * If set to true, the share button will open the share dialog in an iframe (instead of a popup) on top of your website on mobile. This option is only available for mobile, not desktop. Defaults to `false`.
   */
  @Input()
  @FBMLAttribute
  mobileIframe: boolean;

  /**
   * The button is offered in 2 sizes i.e. large and small. Defaults to `small`.
   */
  @Input()
  @FBMLAttribute
  size: string;

  constructor(
    el: ElementRef,
    rnd: Renderer
  ) {
    super(el, rnd, 'fb-share');
  }

}
