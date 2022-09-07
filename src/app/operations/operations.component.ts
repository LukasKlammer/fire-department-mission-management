import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogAlertBeingeditedComponent } from '../dialog-edit-operation/dialog-alert-beingedited/dialog-alert-beingedited.component';
import { DialogEditOperationComponent } from '../dialog-edit-operation/dialog-edit-operation.component';
import { Operation } from '../models/operation.class';
import { UserSelectionsService } from '../shared/user-selections.service';


@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {

  private damagingEventId: string = '';
  public isLoading: boolean = true;
  public panelOpenState: boolean = true;
  private operations: Operation[] = [];
  public openOperations: Operation[] = [];
  public ongoingOperations: Operation[] = [];
  public completedOperations: Operation[] = [];
  public isNewOpenOperation: boolean = false;

  constructor(
    public dialog: MatDialog,
    public alertDialog: MatDialog,
    private firestore: AngularFirestore,
    public userSelections: UserSelectionsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      let id = paramMap.get('id');
      if (typeof id === 'string') {
        this.damagingEventId = id;
        this.setDamagingEventByUrl();
        this.getOperations();
      }
    })
  }

  private setDamagingEventByUrl() {
    this
      .firestore
      .collection('ff-bruneck')
      .doc('QEcJgDBlPVt64GUFIPmw') // damaging events document FF Bruneck
      .collection('damaging-events')
      .doc(this.damagingEventId) // damaging event from url
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        if (changes.timestamp) { // checks, if there is something in database for this url / id
          this.userSelections.selectedDamagingEvent = changes;
          this.userSelections.isDamagingEventSelected = true;
        } else {
          this.router.navigate(['/']);
        }
      });
  }

  private getOperations() {
    this
      .firestore
      .collection('ff-bruneck')
      .doc('QEcJgDBlPVt64GUFIPmw') // damaging events document FF Bruneck
      .collection('damaging-events')
      .doc(this.damagingEventId) // damaging event from url
      .collection('operations')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        this.checkNewOpenOperations(changes);
        this.operations = changes;
        this.splitOperations();
        this.sortAllOperations();
        this.checkForOpenOperations();
        this.isLoading = false;
      });
  }


  private splitOperations() {
    this.openOperations = this.filterByStatus(this.operations, 'Offen');
    this.ongoingOperations = this.filterByStatus(this.operations, 'Läuft');
    this.completedOperations = this.filterByStatus(this.operations, 'Abgeschlossen');
  }

  private sortAllOperations() {
    this.openOperations.sort((a, b) => a.priority.localeCompare(b.priority));
    this.ongoingOperations.sort((a, b) => a.priority.localeCompare(b.priority));
    this.completedOperations.sort((a, b) => a.priority.localeCompare(b.priority));
  }

  private checkForOpenOperations() {
    if (this.openOperations.length != 0 || this.ongoingOperations.length != 0) {
      this.updateOperationsStatus(true);
    } else {
      this.updateOperationsStatus(false);
    }
  }

  private checkNewOpenOperations(changes: any) {
    let receivedOpenOperations = this.filterByStatus(changes, 'Offen');
    let previousOpenOperations = this.filterByStatus(this.operations, 'Offen');
    if (receivedOpenOperations.length > previousOpenOperations.length && this.operations.length != 0) {
      this.isNewOpenOperation = true;
    }
  }

  private filterByStatus(array: any[], filter: string) {
    return array.filter((op : any) => op.status == filter)
  }

  private updateOperationsStatus(areOpenOperations: boolean) {
    this.firestore
      .collection('ff-bruneck')
      .doc('QEcJgDBlPVt64GUFIPmw') // damaging events (FF Bruneck) document
      .collection('damaging-events')
      .doc(this.userSelections.selectedDamagingEvent.customIdName) // actual opened damaging event
      .update({
        areOpenOperations: areOpenOperations,
      })
  }

  public checkIfEditable(operation?: Operation) {
    if (operation?.beingEdited) {
      const dialogRef = this.alertDialog.open(DialogAlertBeingeditedComponent);
      dialogRef.afterClosed().subscribe(openEdit => {
        if (openEdit) {
          this.openEditDialog(operation);
        }
      })
    } else {
      this.openEditDialog(operation);
    }
  }

  public openEditDialog(operation?: Operation | undefined) {
    const dialog = this.dialog.open(DialogEditOperationComponent, {
      disableClose: true,
      width: '90vw',
      height: '90vh',
    });
    if (operation) {
      dialog.componentInstance.operation = new Operation(operation);
      dialog.componentInstance.isExistingOperation = true; // when we open a dialog by clicking on operation card it is an existing operation
      dialog.componentInstance.operation.beingEdited = true;
    } else {
      dialog.componentInstance.operation.operationNumber = this.operations.length + 1; // when we create a new operation we give a new number
    }
  }

  public getBadgeColor(operations: Operation[]) {
    if (operations.length == 0) {
      return 'primary'
    } else {
      return 'warn'
    }
  }
}
