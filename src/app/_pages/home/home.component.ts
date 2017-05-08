import { Component } from '@angular/core';

// routing
import { Router } from '@angular/router';

import { GoogleMapsComponent } from '../../_shared/google-maps/google-maps.component';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: [ 'home.component.scss' ]
})

export class HomeComponent {

    constructor(private _router: Router) { }

    navigateToServices() {
        this._router.navigateByUrl('services');
    }

    navigateToTeam() {
        this._router.navigateByUrl('team');
    }

    navigateToFindUs() {
        this._router.navigateByUrl('contact');
    }
}