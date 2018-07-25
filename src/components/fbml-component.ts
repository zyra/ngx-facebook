import { ElementRef, Renderer2 } from '@angular/core';

/**
 * @hidden
 */
export function FBMLAttribute(target: any, key: string) {
  const processKey = (_k: string) =>
    'data-' +
    _k
      .toString()
      .replace(/([a-z\d])([A-Z])/g, '$1-$2')
      .toLowerCase();
  Object.defineProperty(target, key, {
    set: function(value) {
      value = value.toString();
      this.setAttribute(processKey(key), value);
    },
    get: function() {
      return this.getAttribute(processKey(key));
    },
    enumerable: true
  });
}

/**
 * @hidden
 */
export function FBMLInstanceMethod(target: any, key: string) {
  return {
    enumerable: true,
    value: function(...args: any[]) {
      if (this._instance) {
        return this._instance[key].apply(this._instance, args);
      } else {
        console.warn(
          'ng2-facebook-sdk: tried calling instance method before component is ready.'
        );
        return null;
      }
    }
  };
}

/**
 * @hidden
 */
export class FBMLComponent {
  protected nativeElement: HTMLElement;

  constructor(
    private el: ElementRef,
    private rnd: Renderer2,
    private fbClass: string
  ) {
    this.nativeElement = this.el.nativeElement;
    this.rnd.addClass(this.nativeElement, this.fbClass);
  }

  protected setAttribute(name: string, value: string) {
    if (!name || !value) return;
    this.rnd.setAttribute(this.nativeElement, name, value);
  }

  protected getAttribute(name: string): string {
    if (!name) return;
    return this.nativeElement.getAttribute(name);
  }
}
