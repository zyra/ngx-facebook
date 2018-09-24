import { FBCommentsComponent } from './fb-comments';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

describe('FBCommentsComponent', () => {


  let de: DebugElement,
    comp: FBCommentsComponent,
    fixture: ComponentFixture<FBCommentsComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ FBCommentsComponent ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FBCommentsComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have fb-comments class', () => expect(de.classes['fb-comments']).toBeTruthy());

  it('should have data-href property', () => {
    comp.href = 'https://zyramedia.com';
    expect(Object.keys(de.attributes).indexOf('data-href')).toBeDefined();
    expect(de.attributes['data-href']).toEqual('https://zyramedia.com');
  });

});
