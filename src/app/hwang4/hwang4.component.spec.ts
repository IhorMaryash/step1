import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hwang4Component } from './hwang4.component';

describe('Hwang4Component', () => {
  let component: Hwang4Component;
  let fixture: ComponentFixture<Hwang4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hwang4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hwang4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
