import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegPaxComponent } from './leg-pax.component';

describe('LegPaxComponent', () => {
  let component: LegPaxComponent;
  let fixture: ComponentFixture<LegPaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegPaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegPaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
