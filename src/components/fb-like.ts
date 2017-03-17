import { Component, Input, ElementRef, Renderer } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from './fbml-component';

@Component({
  selector: 'fb-like',
  template: ''
})
export class FBLikeComponent extends FBMLComponent {

  @Input()
  @FBMLAttribute
  action: string;

  @Input()
  @FBMLAttribute
  colorScheme: string;

  @Input()
  @FBMLAttribute
  href: string;

  @Input()
  @FBMLAttribute
  kidDirectedSite: boolean;

  @Input()
  @FBMLAttribute
  layout: string;

  @Input()
  @FBMLAttribute
  ref: string;

  @Input()
  @FBMLAttribute
  share: boolean;

  @Input()
  @FBMLAttribute
  showFaces: boolean;

  @Input()
  @FBMLAttribute
  size: string;

  @Input()
  @FBMLAttribute
  width: string;

  constructor(el: ElementRef, rnd: Renderer) {
    super(el, rnd, 'fb-like');
  }

}
