import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Operation } from '../modules/operation.class';

@Component({
  selector: 'app-dialog-edit-operation',
  templateUrl: './dialog-edit-operation.component.html',
  styleUrls: ['./dialog-edit-operation.component.scss']
})
export class DialogEditOperationComponent implements OnInit {

  operation: Operation = new Operation();

  constructor(public dialogRef: MatDialogRef<DialogEditOperationComponent>) { }

  ngOnInit(): void {
  }

}
