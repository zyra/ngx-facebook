import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from '../fbml-component';

/**
 * @name Page Plugin
 * @shortdesc Page plugin component
 * @fbdoc https://developers.facebook.com/docs/plugins/page-plugin
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

  /**
   * The URL of the Facebook Page
   */
  @Input()
  @FBMLAttribute
  href: string;

  /**
   * The pixel width of the plugin. Min. is `180` & Max. is `500`.
   * Defaults to `340`.
   */
  @Input()
  @FBMLAttribute
  width: number;

  /**
   * The pixel height of the plugin. Min. is `70`.
   * Defaults to `500`.
   */
  @Input()
  @FBMLAttribute
  height: number;

  /**
   * Tabs to render i.e. `timeline`, `events`, `messages`. Use a comma-separated list to add multiple tabs, i.e. `timeline`, `events`.
   * Defaults to `timeline`.
   */
  @Input()
  @FBMLAttribute
  tabs: string;

  /**
   * Hide cover photo in the header.
   * Defaults to `false`.
   */
  @Input()
  @FBMLAttribute
  hideCover: boolean;

  /**
   * Show profile photos when friends like this.
   * Defaults to `true`.
   */
  @Input()
  @FBMLAttribute
  showFacepile: boolean;

  /**
   * Hide the custom call to action button (if available).
   * Default to `false`.
   */
  @Input()
  @FBMLAttribute
  hideCTA: boolean;

  /**
   * Use the small header instead.
   * Defaults to `false`.
   */
  @Input()
  @FBMLAttribute
  smallHeader: boolean;

  /**
   * Try to fit inside the container width.
   * Defaults to `true`.
   */
  @Input()
  @FBMLAttribute
  adaptContainerWidth: boolean;

  constructor(
    el: ElementRef,
    rnd: Renderer2
  ) {
    super(el, rnd, 'fb-page');
  }

}
