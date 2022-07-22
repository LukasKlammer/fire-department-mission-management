import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddMissionComponent } from '../dialog-add-mission/dialog-add-mission.component';
import { Mission } from '../modules/mission.class';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})
export class MissionsComponent implements OnInit {

  selectedMission: Mission = new Mission();

  missions: Mission[] = [
    new Mission({
      description: '1. Flächenlage',
      timestamp: 1607110465663,
    })
    ,
    new Mission({
      description: '2. Flächenlage',
      timestamp: 1607110465663,
    })
  ];

  isMissionSelected: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  selectMission() {
    this.isMissionSelected = true;
  }

  openDialog() {
    this.dialog.open(DialogAddMissionComponent);
  }

}
