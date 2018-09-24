import { FBCommentEmbedComponent } from './fb-comment-embed';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

describe('FBCommentEmbedComponent', () => {


  let de: DebugElement,
    comp: FBCommentEmbedComponent,
    fixture: ComponentFixture<FBCommentEmbedComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ FBCommentEmbedComponent ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FBCommentEmbedComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
  });

  test('should create component', () => expect(comp).toBeDefined());

  test('should have fb-comment-embed class', () => expect(de.classes['fb-comment-embed']).toBeTruthy());

  test('should have data-href property', () => {
    comp.href = 'https://zyramedia.com';
    expect(de.attributes['data-href']).toBeDefined();
    expect(de.attributes['data-href']).toEqual('https://zyramedia.com');
  });

});
