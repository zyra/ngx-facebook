import { FBPostComponent } from './fb-post';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

describe('FBPostComponent', () => {


  let de: DebugElement,
    comp: FBPostComponent,
    fixture: ComponentFixture<FBPostComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ FBPostComponent ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FBPostComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have fb-post class', () => expect(de.classes['fb-post']).toBeTruthy());

  it('should have data-href property', () => {
    comp.href = 'https://zyramedia.com';
    expect(Object.keys(de.attributes).indexOf('data-href')).toBeDefined();
    expect(de.attributes['data-href']).toEqual('https://zyramedia.com');
  });

});
