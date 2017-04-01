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

  it('should create component', () => expect(comp).toBeDefined());

  it('should have data-href property', () => {
    comp.href = 'https://zyramedia.com';
    fixture.detectChanges();
    expect(Object.keys(de.attributes).indexOf('data-href')).toBeDefined();
    expect(de.attributes['data-href']).toEqual('https://zyramedia.com');
  });

  it('should render an embedded comment element', () => {
    comp.href = 'https://www.facebook.com/zuck/posts/10102735452532991?comment_id=1070233703036185';
    fixture.detectChanges();
    expect(de.nativeElement);
  });

});
