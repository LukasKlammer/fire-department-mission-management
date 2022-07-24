import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamagingEventsComponent } from './damaging-events.component';

describe('DamagingEventsComponent', () => {
  let component: DamagingEventsComponent;
  let fixture: ComponentFixture<DamagingEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamagingEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DamagingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
