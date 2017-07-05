import { Component } from '@angular/core';
import { Router } from '@angular/router';

// components
import { FooterContactComponent } from './footer-contact/footer-contact.component';

@Component({
    selector: 'footer',
    templateUrl: 'footer.component.html',
    styleUrls: [ 'footer.component.scss' ]
})

export class FooterComponent {

    constructor(private _router: Router) { }

    navigateToHome() {
        this._router.navigateByUrl('/');
    }

}