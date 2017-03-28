import { Component, Input, ElementRef, Renderer } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from './fbml-component';

/**
 * @name Save Button
 * @description
 * Save button component. The Save button lets people save items or services to a private list on Facebook, share it with friends, and receive relevant notifications.
 * @usage
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
  uri: string;

  constructor(
    el: ElementRef,
    rnd: Renderer
  ) {
    super(el, rnd, 'fb-save');
  }

}
