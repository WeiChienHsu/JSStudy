import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bind2Component } from './bind2.component';

describe('Bind2Component', () => {
  let component: Bind2Component;
  let fixture: ComponentFixture<Bind2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bind2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bind2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
