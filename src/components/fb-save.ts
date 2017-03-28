import { Component, Input, ElementRef, Renderer } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from './fbml-component';

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
