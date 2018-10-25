import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedformsComponent } from './nestedforms.component';

describe('NestedformsComponent', () => {
  let component: NestedformsComponent;
  let fixture: ComponentFixture<NestedformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
