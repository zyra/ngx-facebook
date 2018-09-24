import { FBPageComponent } from './fb-page';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

describe('FBPageComponent', () => {


  let de: DebugElement,
    comp: FBPageComponent,
    fixture: ComponentFixture<FBPageComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ FBPageComponent ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FBPageComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
  });

  test('should create component', () => expect(comp).toBeDefined());

  test('should have fb-page class', () => expect(de.classes['fb-page']).toBeTruthy());

  test('should have data-href property', () => {
    comp.href = 'https://zyramedia.com';
    expect(Object.keys(de.attributes).indexOf('data-href')).toBeDefined();
    expect(de.attributes['data-href']).toEqual('https://zyramedia.com');
  });

});
