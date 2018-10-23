import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClmicComponent } from './clmic.component';

describe('ClmicComponent', () => {
  let component: ClmicComponent;
  let fixture: ComponentFixture<ClmicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClmicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClmicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
