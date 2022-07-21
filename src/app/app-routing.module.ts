import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentMissionComponent } from './current-mission/current-mission.component';
import { MissionsComponent } from './missions/missions.component';

const routes: Routes = [
  { path: '', component: MissionsComponent },
  { path: 'missions', component: MissionsComponent },
  { path: 'current-mission', component: CurrentMissionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
