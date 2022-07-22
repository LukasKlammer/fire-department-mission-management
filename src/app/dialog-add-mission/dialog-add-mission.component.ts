import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Mission } from '../modules/mission.class';

@Component({
  selector: 'app-dialog-add-mission',
  templateUrl: './dialog-add-mission.component.html',
  styleUrls: ['./dialog-add-mission.component.scss']
})
export class DialogAddMissionComponent implements OnInit {

  isLoading: boolean = false;
  mission: Mission = new Mission();

  constructor(public dialogRef: MatDialogRef<DialogAddMissionComponent>) {

    // this.europeanDate = this.date.toLocaleDateString("en-US", { day: 'numeric' })+ "-"+ this.date.toLocaleDateString("en-US", { month: 'short' })+ "-" + this.date.toLocaleDateString("en-US", { year: 'numeric' }) + "   " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds() + " Uhr";
   }

  ngOnInit(): void {
  }

  public generateNewMission(ngForm: any) {
    if (ngForm.submitted && ngForm.form.valid) {
      console.log('neue Mission wird erstellt: ', this.mission);
      // console.log('Mission als JSON: ', this.mission.toJSON());

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
