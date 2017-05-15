import { Component, OnInit } from '@angular/core';

// models
import { TeamMember } from '../models/team-data.interface';

// shared data service
import { DataStorageService } from '../data/data.storage';

@Component({
    selector: 'team-detail',
    templateUrl: 'team-detail.component.html',
    styleUrls: ['team-detail.component.scss']
})

export class TeamDetailComponent implements OnInit {

    // properties
    teamMember: TeamMember;

    constructor(private _dataStorageService: DataStorageService) { }

    ngOnInit() {
        // make sure we always arrive back at top of page.
        window.scrollTo(0, 0);

        // get appropriate data from shared data service
        this.teamMember = this._dataStorageService.getTeamMember();

        console.log(this.teamMember);
    }

}