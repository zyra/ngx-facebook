import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from '../fbml-component';

/**
 * @name Follow Button
 * @shortdesc Follow button component
 * @fbdoc https://developers.facebook.com/docs/plugins/follow-button
 * @description The Follow button lets people subscribe to the public updates of others on Facebook.
 * @usage
 * ```html
 * <fb-follow href="https://www.facebook.com/zuck"></fb-follow>
 * ```
 */
@Component({
  selector: 'fb-follow',
  template: ''
})
export class FBFollowComponent extends FBMLComponent {

  /**
   * The color scheme used by the plugin. Can be `light` or `dark`. Defaults to `light`.
   */
  @Input()
  @FBMLAttribute
  colorScheme: string;

  /**
   * The Facebook.com profile URL of the user to follow.
   */
  @Input()
  @FBMLAttribute
  href: string;

  /**
   * If your web site or online service, or a portion of your service, is directed to children under 13 you must enable this. Defaults to `false`.
   */
  @Input()
  @FBMLAttribute
  kidDirectedSite: boolean;

  /**
   * Selects one of the different layouts that are available for the plugin. Can be one of `standard`, `button_count`, or `box_count`.
   * Defaults to `standard`.
   */
  @Input()
  @FBMLAttribute
  layout: string;

  /**
   * Specifies whether to display profile photos below the button. Defaults to `false`.
   */
  @Input()
  @FBMLAttribute
  showFaces: string;

  /**
   * The button is offered in 2 sizes i.e. `large` and `small`. Defaults to `small`.
   */
  @Input()
  @FBMLAttribute
  size: string;

  /**
   * The width of the plugin. The layout you choose affects the minimum and default widths you can use.
   */
  @Input()
  @FBMLAttribute
  width: string;

  constructor(
    el: ElementRef,
    rnd: Renderer2
  ) {
    super(el, rnd, 'fb-follow');
  }

}
