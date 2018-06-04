import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegCrewComponent } from './leg-crew.component';

describe('LegCrewComponent', () => {
  let component: LegCrewComponent;
  let fixture: ComponentFixture<LegCrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegCrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
