import { Component, Input, ElementRef, Renderer } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from './fbml-component';

@Component({
  selector: 'fb-page',
  template: ''
})
export class FBPageComponent extends FBMLComponent {

  @Input()
  @FBMLAttribute
  href: string;

  @Input()
  @FBMLAttribute
  width: string;

  @Input()
  @FBMLAttribute
  height: string;

  @Input()
  @FBMLAttribute
  tabs: string;

  @Input()
  @FBMLAttribute
  hideCover: boolean;

  @Input()
  @FBMLAttribute
  showFacepile: boolean;

  @Input()
  @FBMLAttribute
  hideCTA: boolean;

  @Input()
  @FBMLAttribute
  smallHeader: boolean;

  @Input()
  @FBMLAttribute
  adaptContainerWidth: boolean;

  constructor(
    el: ElementRef,
    rnd: Renderer
  ) {
    super(el, rnd, 'fb-page');
  }

}
