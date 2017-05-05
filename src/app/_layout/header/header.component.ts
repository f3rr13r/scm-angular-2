import { Component, OnInit } from '@angular/core';

// routing
import { Router } from '@angular/router';

// components
import { HeaderContactComponent } from './header-contact/header-contact.component';

@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
    styleUrls: [ 'header.component.scss' ]
})

export class HeaderComponent implements OnInit {

    isHomeSelected: boolean;
    isServicesSelected: boolean;
    isTeamSelected: boolean;
    isFindUsSelected: boolean;

    constructor(private _router: Router) { }

    ngOnInit() {
        // show home page by default.
        this.navigateToHome();
    }

    navigateToHome() {
        this._router.navigateByUrl('home');
        this.isHomeSelected = true;
        this.isServicesSelected = false;
        this.isTeamSelected = false;
        this.isFindUsSelected = false;
    }

    navigateToServices() {
        this._router.navigateByUrl('services');
        this.isHomeSelected = false;
        this.isServicesSelected = true;
        this.isTeamSelected = false;
        this.isFindUsSelected = false;
    }

    navigateToTeam() {
        this._router.navigateByUrl('team');
        this.isHomeSelected = false;
        this.isServicesSelected = false;
        this.isTeamSelected = true;
        this.isFindUsSelected = false;
    }

    navigateToContact() {
        this._router.navigateByUrl('contact');
        this.isHomeSelected = false;
        this.isServicesSelected = false;
        this.isTeamSelected = false;
        this.isFindUsSelected = true;
    }
}