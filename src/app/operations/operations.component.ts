import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditOperationComponent } from '../dialog-edit-operation/dialog-edit-operation.component';
import { Operation } from '../modules/operation.class';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {


  operations: Operation[] = [
    new Operation(),
    new Operation(),
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openDialog() {
    this.dialog.open(DialogEditOperationComponent, {
      disableClose: true,
      width: '90vw',
      height: '90vh',
    });
  }

}
