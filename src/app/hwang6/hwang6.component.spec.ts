import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hwang6Component } from './hwang6.component';

describe('Hwang6Component', () => {
  let component: Hwang6Component;
  let fixture: ComponentFixture<Hwang6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hwang6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hwang6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
