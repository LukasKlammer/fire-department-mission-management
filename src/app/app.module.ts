import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirestationComponent } from './firestation/firestation.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MissionsComponent } from './missions/missions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DialogEditOperationComponent } from './dialog-edit-operation/dialog-edit-operation.component';
import { CurrentMissionComponent } from './current-mission/current-mission.component';
import { OperationsComponent } from './operations/operations.component';
import { MatChipsModule } from '@angular/material/chips';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { DialogAddMissionComponent } from './dialog-add-mission/dialog-add-mission.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from './shared/sidenav.service';
import { ContentDrawerComponent } from './content-drawer/content-drawer.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    FirestationComponent,
    HeaderComponent,
    FooterComponent,
    MissionsComponent,
    DialogEditOperationComponent,
    CurrentMissionComponent,
    OperationsComponent,
    DialogAddMissionComponent,
    ContentDrawerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    DragDropModule,
    MatRadioModule,
    FormsModule,
    MatDialogModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatSelectModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
