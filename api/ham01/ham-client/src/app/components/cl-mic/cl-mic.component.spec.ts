import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClMicComponent } from './cl-mic.component';

describe('ClMicComponent', () => {
  let component: ClMicComponent;
  let fixture: ComponentFixture<ClMicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClMicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClMicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
