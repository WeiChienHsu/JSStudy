import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClmicNewComponent } from './clmic-new.component';

describe('ClmicNewComponent', () => {
  let component: ClmicNewComponent;
  let fixture: ComponentFixture<ClmicNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClmicNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClmicNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
