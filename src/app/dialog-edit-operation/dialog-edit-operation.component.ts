import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Operation } from '../modules/operation.class';
import { VehiclesService } from '../shared/vehicles.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dialog-edit-operation',
  templateUrl: './dialog-edit-operation.component.html',
  styleUrls: ['./dialog-edit-operation.component.scss']
})
export class DialogEditOperationComponent implements OnInit {

  operation: Operation = new Operation();
  isLoading: boolean = false;
  priorities: string[] = ['hoch', 'mittel', 'niedrig'];
  status: string[] = ['Offen', 'Läuft', 'Abgeschlossen'];


  constructor(public dialogRef: MatDialogRef<DialogEditOperationComponent>, public vehiclesService: VehiclesService) { }

  ngOnInit(): void {

  }

  public saveOperation(ngForm: any) {
    if (ngForm.submitted && ngForm.form.valid) {
      console.log('Einsatz wird erstellt oder gespeichert: ', this.operation);
      console.log('Einsatz als JSON: ', this.operation.toJSON());
      this.dialogRef.close();

      // ins array pushen und speichern
      // this.firestore
      //   .collection('ff-bruneck')
      //   .doc('asdfasdf') //missions document
      //   .collection('missions')
      //   .add(this.operation.toJSON())
      //   .then((result: any) => {
      //     console.log('Adding user finished: ' , result);
      //     this.isLoading = false;
      //     this.dialogRef.close();
      //   })
    }
  }

  public drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

  }

}
