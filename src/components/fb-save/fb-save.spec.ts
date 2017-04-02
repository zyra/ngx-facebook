import { FBSaveComponent } from './fb-save';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

describe('FBSaveComponent', () => {


  let de: DebugElement,
    comp: FBSaveComponent,
    fixture: ComponentFixture<FBSaveComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ FBSaveComponent ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FBSaveComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have fb-save class', () => expect(de.classes['fb-save']).toBeTruthy());

  it('should have data-uri property', () => {
    comp.uri = 'https://zyramedia.com';
    expect(Object.keys(de.attributes).indexOf('data-uri')).toBeDefined();
    expect(de.attributes['data-uri']).toEqual('https://zyramedia.com');
  });

});
