import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditOperationComponent } from './dialog-edit-operation.component';

describe('DialogEditOperationComponent', () => {
  let component: DialogEditOperationComponent;
  let fixture: ComponentFixture<DialogEditOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
