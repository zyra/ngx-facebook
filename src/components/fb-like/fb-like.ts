import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from '../fbml-component';

/**
 * @name Like Button
 * @shortdesc Like button component
 * @fbdoc https://developers.facebook.com/docs/plugins/like-button
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

  /**
   * The verb to display on the button. Can be either `like` or `recommend`.
   * Defaults to `like`.
   */
  @Input()
  @FBMLAttribute
  action: string;

  /**
   * The color scheme used by the plugin for any text outside of the button itself. Can be `light` or `dark`.
   * Defaults to `light`.
   */
  @Input()
  @FBMLAttribute
  colorScheme: string;

  /**
   * The absolute URL of the page that will be liked.
   * Defaults to the current URL.
   */
  @Input()
  @FBMLAttribute
  href: string = window.location.href;

  /**
   * If your web site or online service, or a portion of your service, is directed to children under 13 [you must enable this](https://developers.facebook.com/docs/plugins/restrictions/).
   * Defaults to `false`.
   */
  @Input()
  @FBMLAttribute
  kidDirectedSite: boolean;

  /**
   * Selects one of the different layouts that are available for the plugin.
   * Can be one of `standard`, `button_count`, `button` or `box_count`.
   * See the [FAQ](https://developers.facebook.com/docs/plugins/like-button#faqlayout) for more details.
   * Defaults to `standard`.
   */
  @Input()
  @FBMLAttribute
  layout: string;

  /**
   * A label for tracking referrals which must be less than 50 characters and can contain alphanumeric characters and some punctuation (currently +/=-.:_).
   * See the [FAQ](https://developers.facebook.com/docs/plugins/faqs#ref) for more details.
   */
  @Input()
  @FBMLAttribute
  ref: string;

  /**
   * Specifies whether to include a share button beside the Like button.
   * This only works with the XFBML version.
   * Defaults to `false`.
   */
  @Input()
  @FBMLAttribute
  share: boolean;

  /**
   * Specifies whether to display profile photos below the button (standard layout only).
   * You must not enable this on child-directed sites.
   * Defaults to `false`.
   */
  @Input()
  @FBMLAttribute
  showFaces: boolean;

  /**
   * The button is offered in 2 sizes i.e. `large` and `small`.
   * Defaults to `small`.
   */
  @Input()
  @FBMLAttribute
  size: string;

  /**
   * The width of the plugin (standard layout only), which is subject to the minimum and default width.
   * See [Layout Settings](https://developers.facebook.com/docs/plugins/like-button#faqlayout) in the official docs for more details.
   */
  @Input()
  @FBMLAttribute
  width: string;

  constructor(el: ElementRef, rnd: Renderer2) {
    super(el, rnd, 'fb-like');
  }

}
