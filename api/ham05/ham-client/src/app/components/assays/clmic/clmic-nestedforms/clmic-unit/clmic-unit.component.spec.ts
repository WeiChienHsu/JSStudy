import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClmicUnitComponent } from './clmic-unit.component';

describe('ClmicUnitComponent', () => {
  let component: ClmicUnitComponent;
  let fixture: ComponentFixture<ClmicUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClmicUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClmicUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
