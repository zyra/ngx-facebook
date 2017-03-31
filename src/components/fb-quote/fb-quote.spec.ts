import { FBQuoteComponent } from './fb-quote';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

describe('FBQuoteComponent', () => {


  let de: DebugElement,
    comp: FBQuoteComponent,
    fixture: ComponentFixture<FBQuoteComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ FBQuoteComponent ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FBQuoteComponent);
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

});
