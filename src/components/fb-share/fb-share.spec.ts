import { FBShareComponent } from './fb-share';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

describe('FBShareComponent', () => {


  let de: DebugElement,
    comp: FBShareComponent,
    fixture: ComponentFixture<FBShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FBShareComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FBShareComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have fb-share-button class', () => expect(de.classes['fb-share-button']).toBeTruthy());

  it('should have data-href property', () => {
    comp.href = 'https://zyramedia.com';
    expect(Object.keys(de.attributes).indexOf('data-href')).toBeDefined();
    expect(de.attributes['data-href']).toEqual('https://zyramedia.com');
  });

});
