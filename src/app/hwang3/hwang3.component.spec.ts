import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hwang3Component } from './hwang3.component';

describe('Hwang3Component', () => {
  let component: Hwang3Component;
  let fixture: ComponentFixture<Hwang3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hwang3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hwang3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
