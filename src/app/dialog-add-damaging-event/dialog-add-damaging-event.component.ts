import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DamagingEvent } from '../modules/damaging-event.class';

@Component({
  selector: 'app-dialog-add-damaging-event',
  templateUrl: './dialog-add-damaging-event.component.html',
  styleUrls: ['./dialog-add-damaging-event.component.scss']
})
export class DialogAddDamagingEventComponent implements OnInit {

  isLoading: boolean = false;
  damagingEvent: DamagingEvent = new DamagingEvent();

  constructor(public dialogRef: MatDialogRef<DialogAddDamagingEventComponent>) {
  }

  ngOnInit(): void {
  }

  public generateNewMission(ngForm: any) {
    if (ngForm.submitted && ngForm.form.valid) {
      console.log('neue Mission wird erstellt: ', this.damagingEvent);
      console.log('Mission als JSON: ', this.damagingEvent.toJSON());
      this.dialogRef.close();

      // ins array pushen und speichern
      // this.firestore
      //   .collection('ff-bruneck')
      //   .doc('asdfasdf') //missions document
      //   .collection('missions')
      //   .add(this.mission.toJSON())
      //   .then((result: any) => {
      //     console.log('Adding user finished: ' , result);
      //     this.isLoading = false;
      //     this.dialogRef.close();
      //   })
    }

  }

}
