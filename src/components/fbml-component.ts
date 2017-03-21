import { ElementRef, Renderer } from '@angular/core';

export function FBMLAttribute(target: any, key: string) {
  Object.defineProperty(target, key, {
    set: function(value) {
      key = key.toString();
      key = key.replace(/([a-z\d])([A-Z])/g, '$1-$2');
      key = key.toLowerCase();
      value = value.toString();
      this.setAttribute(key, value);
    }
  });
}

/**
 * @hidden
 */
export class FBMLComponent {

  protected nativeElement: HTMLElement;

  constructor(
    private el: ElementRef,
    private rnd: Renderer,
    fbClass: string
  ) {
    this.nativeElement = this.el.nativeElement;
    this.rnd.setElementClass(this.nativeElement, fbClass, true);
  }

  protected setAttribute(name: string, value: string) {
    if (!name || !value) return;
    this.rnd.setElementAttribute(this.nativeElement, 'data-' + name, value);
  }

}
