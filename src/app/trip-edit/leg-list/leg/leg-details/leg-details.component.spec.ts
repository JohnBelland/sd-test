import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegDetailsComponent } from './leg-details.component';

describe('LegDetailsComponent', () => {
  let component: LegDetailsComponent;
  let fixture: ComponentFixture<LegDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
