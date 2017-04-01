import { FBFollowComponent } from './fb-follow';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

describe('FBFollowComponent', () => {


  let de: DebugElement,
    comp: FBFollowComponent,
    fixture: ComponentFixture<FBFollowComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ FBFollowComponent ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FBFollowComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have fb-follow class', () => expect(de.classes['fb-follow']).toBeTruthy());

  it('should have data-href property', () => {
    comp.href = 'https://zyramedia.com';
    fixture.detectChanges();
    expect(Object.keys(de.attributes).indexOf('data-href')).toBeDefined();
    expect(de.attributes['data-href']).toEqual('https://zyramedia.com');
  });

});
