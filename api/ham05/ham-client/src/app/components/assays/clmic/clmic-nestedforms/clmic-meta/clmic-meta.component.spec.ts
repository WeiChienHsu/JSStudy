import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClmicMetaComponent } from './clmic-meta.component';

describe('ClmicMetaComponent', () => {
  let component: ClmicMetaComponent;
  let fixture: ComponentFixture<ClmicMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClmicMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClmicMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
