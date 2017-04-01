import { FBSendComponent } from './fb-send';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

describe('FBSendComponent', () => {


  let de: DebugElement,
    comp: FBSendComponent,
    fixture: ComponentFixture<FBSendComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ FBSendComponent ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FBSendComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have fb-send class', () => expect(de.classes['fb-send']).toBeTruthy());

  it('should have data-href property', () => {
    comp.href = 'https://zyramedia.com';
    expect(Object.keys(de.attributes).indexOf('data-href')).toBeDefined();
    expect(de.attributes['data-href']).toEqual('https://zyramedia.com');
  });

});
