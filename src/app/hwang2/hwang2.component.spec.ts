import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hwang2Component } from './hwang2.component';

describe('Hwang2Component', () => {
  let component: Hwang2Component;
  let fixture: ComponentFixture<Hwang2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hwang2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hwang2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
