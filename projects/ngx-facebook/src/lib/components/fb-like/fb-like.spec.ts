import { FBLikeComponent } from './fb-like';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

describe('FBLikeComponent', () => {


  let de: DebugElement,
    comp: FBLikeComponent,
    fixture: ComponentFixture<FBLikeComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ FBLikeComponent ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FBLikeComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have fb-like class', () => expect(de.classes['fb-like']).toBeTruthy());

  it('should have data-href property', () => {
    comp.href = 'https://zyramedia.com';
    expect(Object.keys(de.attributes).indexOf('data-href')).toBeDefined();
    expect(de.attributes['data-href']).toEqual('https://zyramedia.com');
  });

});
