import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from '../fbml-component';

/**
 * @name Save Button
 * @shortdesc Save button component.
 * @fbdoc https://developers.facebook.com/docs/plugins/save
 * @description
 * The Save button lets people save items or services to a private list on Facebook, share it with friends, and receive relevant notifications.
 * @usage
 * ```html
 * <fb-save uri="https://github.com/zyra/ng2-facebook-sdk/"></fb-save>
 * ```
 */
@Component({
  selector: 'fb-save',
  template: ''
})
export class FBSaveComponent extends FBMLComponent {

  /**
   * The absolute link of the page that will be saved.
   * Current Link/Address
   */
  @Input()
  @FBMLAttribute
  uri: string = window.location.href;

  constructor(
    el: ElementRef,
    rnd: Renderer2
  ) {
    super(el, rnd, 'fb-save');
  }

}
