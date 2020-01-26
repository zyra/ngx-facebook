import { ElementRef, Renderer2 } from '@angular/core';
/**
 * @hidden
 */
export declare function FBMLAttribute(target: any, key: string): void;
/**
 * @hidden
 */
export declare function FBMLInstanceMethod(target: any, key: string): {
    enumerable: boolean;
    value: (...args: any[]) => any;
};
/**
 * @hidden
 */
export declare class FBMLComponent {
    private el;
    private rnd;
    private fbClass;
    protected nativeElement: HTMLElement;
    constructor(el: ElementRef, rnd: Renderer2, fbClass: string);
    protected setAttribute(name: string, value: string): void;
    protected getAttribute(name: string): string;
}
