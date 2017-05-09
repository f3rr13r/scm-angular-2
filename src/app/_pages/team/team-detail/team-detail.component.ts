import { Component, OnInit, OnDestroy } from '@angular/core';

// actived route
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'team-detail',
    templateUrl: 'team-detail.component.html',
    styleUrls: ['team-detail.component.scss']
})

export class TeamDetailComponent implements OnInit, OnDestroy {

    // properties
    teamMemberName: string;
    private sub: any;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        // make sure we always arrive back at top of page.
        window.scrollTo(0, 0);

        this.sub = this.route.params.subscribe(params => {
            this.teamMemberName = params['name'];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    // we will have imported data in here and will cross reference
    // the name which comes back. This will then by used to display
    // the correct data.

}