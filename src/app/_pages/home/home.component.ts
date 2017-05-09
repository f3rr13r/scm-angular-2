import { Component, OnInit } from '@angular/core';

// routing
import { Router } from '@angular/router';

import { GoogleMapsComponent } from '../../_shared/google-maps/google-maps.component';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: [ 'home.component.scss' ]
})

export class HomeComponent implements OnInit {

    constructor(private _router: Router) { }

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

    navigateToFindUs() {
        this._router.navigateByUrl('find-us');
    }
}