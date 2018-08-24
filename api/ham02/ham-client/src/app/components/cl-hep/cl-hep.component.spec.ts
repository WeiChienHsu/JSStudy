import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClHepComponent } from './cl-hep.component';

describe('ClHepComponent', () => {
  let component: ClHepComponent;
  let fixture: ComponentFixture<ClHepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClHepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClHepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
