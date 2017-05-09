import { Component, OnInit } from '@angular/core';

// routing
import { Router } from '@angular/router';

@Component({
    selector: 'team',
    templateUrl: 'team.component.html',
    styleUrls: [ 'team.component.scss' ]
})

export class TeamComponent implements OnInit {

    constructor(private _router: Router) { }

    // make sure we always arrive back at top of page.
    ngOnInit() {
        window.scrollTo(0, 0);
    }

    goToTeamDetail(name: string) {
        this._router.navigate(['/team', name ]);
    } 

}