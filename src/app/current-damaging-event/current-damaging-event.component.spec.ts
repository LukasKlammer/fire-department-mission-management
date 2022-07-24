import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDamagingEventComponent } from './current-damaging-event.component';

describe('CurrentDamagingEventComponent', () => {
  let component: CurrentDamagingEventComponent;
  let fixture: ComponentFixture<CurrentDamagingEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentDamagingEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentDamagingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
