import { Component, OnInit } from '@angular/core';

// routing
import { Router } from '@angular/router';

@Component({
  selector: 'scm-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _router: Router) {}

  // make sure we always arrive back at top of page.
  ngOnInit() {
    window.scrollTo(0, 0);
  }

  navigateToServices() {
    this._router.navigateByUrl('services');
  }

  navigateToTeam() {
    this._router.navigateByUrl('team');
  }

  navigateToFindUs(location: string) {
    this._router.navigate(['find-us', location]);
  }
}
