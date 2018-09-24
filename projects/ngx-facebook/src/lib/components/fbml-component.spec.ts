import { FBMLAttribute, FBMLComponent, FBMLInstanceMethod } from './fbml-component';
import { Component, ElementRef, Renderer2, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: ''
})
class FBTestComponent extends FBMLComponent {

  _instance = {
    testMethod: () => 'success',
    testMethodWithArgs: (...args: any[]) => args.length
  };

  @FBMLAttribute
  testAttr: string;

  constructor(el: ElementRef, rnd: Renderer2) {
    super(el, rnd, 'fb-test');
  }

  @FBMLInstanceMethod
  testMethod(): string { return; }

  @FBMLInstanceMethod
  testMethodWithArgs(arg1: string, arg2: string): number { return; }

}

describe('FBMLComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FBTestComponent ]
    }).compileComponents();
  }));

  test('should create an element with class fb-test', () => {

    const instance = TestBed.createComponent(FBTestComponent);
    instance.detectChanges();
    expect(instance.componentInstance).toBeDefined();
    expect(Object.keys(instance.debugElement.classes)).toContain('fb-test');

  });

});

describe('FBMLAttribute', () => {

  let de: DebugElement,
    comp: FBTestComponent,
    fixture: ComponentFixture<FBTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FBTestComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FBTestComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
  });

  test('should add data-test-attr attribute to element', () => {
    comp.testAttr = 'test-val';
    fixture.detectChanges();
    expect(Object.keys(de.attributes)).toContain('data-test-attr');
    expect(de.attributes['data-test-attr']).toEqual('test-val');
    // should return value we set before
    expect(comp.testAttr).toEqual('test-val');
  });

});

describe('FBMLInstanceMethod', () => {

  let de: DebugElement,
    comp: FBTestComponent,
    fixture: ComponentFixture<FBTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FBTestComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FBTestComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
  });

  test('should do basic call to instance method', () => {
    spyOn(comp._instance, 'testMethod').and.callThrough();
    const res = comp.testMethod();
    expect(comp._instance.testMethod).toHaveBeenCalled();
    expect(res).toEqual('success');
  });

  test('should do call with args to instance method', () => {
    spyOn(comp._instance, 'testMethodWithArgs').and.callThrough();
    const res = comp.testMethodWithArgs('hello', 'world');
    expect(comp._instance.testMethodWithArgs).toHaveBeenCalledWith('hello', 'world');
    expect(res).toEqual(2);
  });

});
