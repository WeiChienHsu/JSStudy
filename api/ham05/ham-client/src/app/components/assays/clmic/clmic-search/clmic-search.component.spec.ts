import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClmicSearchComponent } from './clmic-search.component';

describe('ClmicSearchComponent', () => {
  let component: ClmicSearchComponent;
  let fixture: ComponentFixture<ClmicSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClmicSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClmicSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
