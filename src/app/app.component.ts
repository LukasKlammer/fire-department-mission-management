import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './shared/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fd-mission-management';

  @ViewChild('drawer') public sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService) {
  }

  ngOnInit(): void {;
    console.log(this.sidenav);

    this.sidenavService.setSidenav(this.sidenav);
  }



}
