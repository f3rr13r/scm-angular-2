import { Component } from '@angular/core';

// routing
import { Router } from '@angular/router';

// components
import { HeaderContactComponent } from './header-contact/header-contact.component';

@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
    styleUrls: [ 'header.component.scss' ]
})

export class HeaderComponent {

    constructor(private _router: Router) { }

    navigateToHome() {
        this._router.navigateByUrl('home');
    }

    navigateToServices() {
        this._router.navigateByUrl('services');
    }

    navigateToTeam() {
        this._router.navigateByUrl('team');
    }

    navigateToContact() {
        this._router.navigateByUrl('contact');
    }
}