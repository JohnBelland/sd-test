import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegPrimaryComponent } from './leg-primary.component';

describe('LegPrimaryComponent', () => {
  let component: LegPrimaryComponent;
  let fixture: ComponentFixture<LegPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegPrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
