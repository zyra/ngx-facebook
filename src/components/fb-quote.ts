import { Component, Input, ElementRef, Renderer } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from './fbml-component';

@Component({
  selector: 'fb-quote',
  template: ''
})
export class FBQuoteComponent extends FBMLComponent {

  /**
   * The absolute URL of the page that will be quoted.
   * Defaults to the current URL
   */
  @Input()
  @FBMLAttribute
  href: string;

  /**
   * Can be set to quote or button. Defaults to quote.
   */
  @Input()
  @FBMLAttribute
  layout: string;

  constructor(
    el: ElementRef,
    rnd: Renderer
  ) {
    super(el, rnd, 'fb-quote');
  }

}
