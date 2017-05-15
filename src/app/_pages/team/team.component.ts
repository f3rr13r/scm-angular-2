import { Component, OnInit } from '@angular/core';

// routing
import { Router } from '@angular/router';

// models
import { TeamMember } from './models/team-data.interface';

// service
import { DataStorageService } from './data/data.storage';

@Component({
    selector: 'team',
    templateUrl: 'team.component.html',
    styleUrls: ['team.component.scss']
})

export class TeamComponent implements OnInit {

    team: TeamMember[];
    isOnTeamHover: boolean;
    selectedItem: number;

    constructor(private _router: Router,
                private _dataStorageService: DataStorageService
                ) { }

    ngOnInit() {
        // make sure we always arrive back at top of page.
        window.scrollTo(0, 0);

        // default to dai's profile on arrival.
        this.selectedItem = 0;

        // team data
        this.team = [
            {
                path: 'David-Sedgewick',
                name: 'David Sedgewick',
                initials: 'DS',
                imageUrl: '/assets/team/rhod-profile.jpg', /* update when we have it */
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam.',
                fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta.',
                emailAddress: 'example@example.com',
                phoneNumber: +447771234567
            }, {
                path: 'Rhodri-Chudleigh',
                name: 'Rhodri Chudleigh',
                initials: 'RC',
                imageUrl: '/assets/team/rhod-profile.jpg',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam.',
                fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta.',
                emailAddress: 'example@example.com',
                phoneNumber: +447771234567
            }, {
                path: 'Robert-Chudleigh',
                name: 'Robert Chudleigh',
                initials: 'RC',
                imageUrl: '/assets/team/rhod-profile.jpg', /* update when we have it */
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam.',
                fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta.',
                emailAddress: 'example@example.com',
                phoneNumber: +447771234567
            }, {
                path: 'James-McKenna',
                name: 'James McKenna',
                initials: 'JM',
                imageUrl: '/assets/team/james-profile.jpg',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam.',
                fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta.',
                emailAddress: 'example@example.com',
                phoneNumber: +447771234567
            }
        ];
    }

    onTeamHover() {
        this.isOnTeamHover = true;
    }

    offTeamHover() {
        this.isOnTeamHover = false;
    }

    itemHover(value: number) {
        this.selectedItem = value;
    }

    goToTeamDetail(_urlPath: string, _name: string, _initials: string, _imageUrl: string, _shortDescription: string, _fullDescription: string, _emailAddress: string, _phoneNumber: number) {

        // navigate to team detail.
        this._router.navigate(['/team', name]);

        // pass data to shared storage
        this._dataStorageService.setTeamMember(_urlPath, _name, _initials, _imageUrl, _shortDescription, _fullDescription, _emailAddress, _phoneNumber);
    }
}