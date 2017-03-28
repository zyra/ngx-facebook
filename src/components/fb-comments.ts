import { Component, Input, ElementRef, Renderer } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from './fbml-component';

@Component({
  selector: 'fb-comments',
  template: ''
})
export class FBCommentsComponent extends FBMLComponent {

  @Input()
  @FBMLAttribute
  colorscheme: string;

  @Input()
  @FBMLAttribute
  href: string;

  @Input()
  @FBMLAttribute
  mobile: boolean;

  @Input()
  @FBMLAttribute
  numposts: number;

  @Input()
  @FBMLAttribute
  orderBy: string;

  @Input()
  @FBMLAttribute
  width: string;

  constructor(
    el: ElementRef,
    rnd: Renderer
  ) {
    super(el, rnd, 'fb-comments');
  }

}
