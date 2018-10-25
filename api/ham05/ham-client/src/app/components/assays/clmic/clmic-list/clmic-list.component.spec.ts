import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClmicListComponent } from './clmic-list.component';

describe('ClmicListComponent', () => {
  let component: ClmicListComponent;
  let fixture: ComponentFixture<ClmicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClmicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClmicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
