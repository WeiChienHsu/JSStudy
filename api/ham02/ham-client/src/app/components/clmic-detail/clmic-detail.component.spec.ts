import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClmicDetailComponent } from './clmic-detail.component';

describe('ClmicDetailComponent', () => {
  let component: ClmicDetailComponent;
  let fixture: ComponentFixture<ClmicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClmicDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClmicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
