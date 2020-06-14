import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from '../fbml-component';

/**
 * @name Share Button
 * @shortdesc Share button component
 * @fbdoc https://developers.facebook.com/docs/plugins/share-button
 * @description
 * The Share button lets people add a personalized message to links before sharing on their timeline, in groups, or to their friends via a Facebook Message.
 * @usage
 * ```html
 * <fb-share href="https://github.com/zyra/ng2-facebook-sdk/"></fb-share>
 * ```
 */
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
    rnd: Renderer2
  ) {
    super(el, rnd, 'fb-share-button');
  }

}
