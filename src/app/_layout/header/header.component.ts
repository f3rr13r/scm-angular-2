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

        console.log(this._router.url);
    }

    // routing
    navigateToHome() {
        this._router.navigateByUrl('home');
        this.homePageSelected();
    }

    navigateToServices() {
        this._router.navigateByUrl('services');
        this.servicesPageSelected();
    }

    navigateToTeam() {
        this._router.navigateByUrl('team');
        this.teamPageSelected();
    }

    navigateToFindUs() {
        this._router.navigateByUrl('find-us');
        this.findUsPageSelected();
    }


    // assign selected button selected states.
    homePageSelected() {
        this.isHomeSelected = true;
        this.isServicesSelected = false;
        this.isTeamSelected = false;
        this.isFindUsSelected = false;
    }

    servicesPageSelected() {
        this.isHomeSelected = false;
        this.isServicesSelected = true;
        this.isTeamSelected = false;
        this.isFindUsSelected = false;
    }

    teamPageSelected() {
        this.isHomeSelected = false;
        this.isServicesSelected = false;
        this.isTeamSelected = true;
        this.isFindUsSelected = false;
    }

    findUsPageSelected() {
        this.isHomeSelected = false;
        this.isServicesSelected = false;
        this.isTeamSelected = false;
        this.isFindUsSelected = true;
    }
}