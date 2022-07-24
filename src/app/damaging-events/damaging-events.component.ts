import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddDamagingEventComponent } from '../dialog-add-damaging-event/dialog-add-damaging-event.component';
import { DamagingEvent } from '../modules/damaging-event.class';

@Component({
  selector: 'app-damaging-events',
  templateUrl: './damaging-events.component.html',
  styleUrls: ['./damaging-events.component.scss']
})
export class DamagingEventsComponent implements OnInit {
  selectedMission: DamagingEvent = new DamagingEvent();

  missions: DamagingEvent[] = [
    new DamagingEvent({
      description: 'Sturm über Bruneck',
      timestamp: 1607110465663,
    })
    ,
    new DamagingEvent({
      description: 'Starkregen mit Hagel',
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
    this.dialog.open(DialogAddDamagingEventComponent, {
      disableClose: true,
    });
  }

}
