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
  date: Date = new Date();
  europeanDate: string = '';

  constructor(public dialogRef: MatDialogRef<DialogAddMissionComponent>) {
    this.mission.timestamp = this.date.getTime();


    this.europeanDate = this.date.toLocaleDateString("en-US", { day: 'numeric' })+ "-"+ this.date.toLocaleDateString("en-US", { month: 'short' })+ "-" + this.date.toLocaleDateString("en-US", { year: 'numeric' });

   }

  ngOnInit(): void {
  }

  public generateNewMission(ngForm: any) {
    if (ngForm.submitted && ngForm.form.valid) {
      alert('neue Mission wird erstellt')
      // ins array pushen und speichern
    }

  }

}
