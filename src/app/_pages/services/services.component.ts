import { Component, OnInit } from '@angular/core';

// routing
import { Router } from '@angular/router';

@Component({
    selector: 'services',
    templateUrl: 'services.component.html',
    styleUrls: [ 'services.component.scss' ]
})

export class ServicesComponent implements OnInit {

    constructor(private _router: Router) { }

    // make sure we always arrive back at top of page.
    ngOnInit() {
        window.scrollTo(0, 0);
    }
    
    goToServicesDetail(name: string) {
        this._router.navigate(['/services', name ]);
    }

}