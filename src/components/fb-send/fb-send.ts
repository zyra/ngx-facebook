import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from '../fbml-component';

/**
 * @name Send Button
 * @shortdesc Send button component
 * @fbdoc https://developers.facebook.com/docs/plugins/send-button
 * @description
 * The Send button lets people privately send content on your site to one or more friends in a Facebook message.
 * @usage
 * ```html
 * <fb-send href="https://github.com/zyra/ng2-facebook-sdk/"></fb-send>
 * ```
 */
@Component({
  selector: 'fb-send',
  template: ''
})
export class FBSendComponent extends FBMLComponent {

  /**
   * The color scheme used by the plugin. Can be "light" or "dark". Defaults to light.
   */
  @Input()
  @FBMLAttribute
  colorScheme: string;

  /**
   * The absolute URL of the page that will be sent. Defaults to the current URL.
   */
  @Input()
  @FBMLAttribute
  href: string = window.location.href;

  /**
   * If your web site or online service, or a portion of your service, is directed to children under 13 you must enable this.
   */
  @Input()
  @FBMLAttribute
  kidDirectedSite: boolean;

  /**
   * A label for tracking referrals which must be less than 50 characters, and can contain alphanumeric characters and some punctuation (currently +/=-.:_).
   */
  @Input()
  @FBMLAttribute
  ref: string;

  /**
   * Size of the button. Defaults to small.
   */
  @Input()
  @FBMLAttribute
  size: string;

  constructor(
    el: ElementRef,
    rnd: Renderer2
  ) {
    super(el, rnd, 'fb-send');
  }

}
