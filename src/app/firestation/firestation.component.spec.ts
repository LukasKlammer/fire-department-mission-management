import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestationComponent } from './firestation.component';

describe('FirestationComponent', () => {
  let component: FirestationComponent;
  let fixture: ComponentFixture<FirestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirestationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
