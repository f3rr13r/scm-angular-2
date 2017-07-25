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

    partner: TeamMember[];
    duty: TeamMember[];
    admin: TeamMember[];
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
        this.partner = [
            {
                path: 'David-Sedgewick',
                name: 'David Sedgewick',
                initials: 'DS',
                backgroundImageUrl: '/assets/team/rhod-profile.jpg', /* update when we have it */
                imageUrl: '/assets/team/rhod-profile.jpg', /* update when we have it */
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam.',
                fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta.',
                emailAddress: 'david@scmlaw.co.uk',
                phoneNumberString: '07771234567',
                phoneNumber: +447771234567
            }, {
                path: 'Rhodri-Chudleigh',
                name: 'Rhodri Chudleigh',
                initials: 'RC',
                backgroundImageUrl: '/assets/team/rhod-profile.jpg',
                imageUrl: '/assets/team/rhod-profile.jpg',
                shortDescription: 'Rhodri was the founding partner of Chudleigh solicitors before the practice merged in 2015 to become SCM Solicitors.',
                fullDescription: 'Rhodri was the founding partner of Chudleigh solicitors before the practice merged in 2015 to become SCM Solicitors.  With over 15 years’ experience, he has extensive experience in defending complex criminal cases including murder, serious violence, large scale drug conspiracies, serious sexual offences, fraud, money laundering and firearm offences. Rhodri is an experienced advocate whose practice is predominantly based in the Crown Court.  He has also appeared regularly before the Court of Appeal Criminal Division.  Rhodri has past experience of working in specialised Fraud Firm in Birmingham representing defendants prosecuted by the Serious fraud Office and H M Revenue and Customs.',
                emailAddress: 'rhodri@scmlaw.co.uk',
                phoneNumberString: '07771234567',
                phoneNumber: +447771234567
            }, {
                path: 'Robert-Chudleigh',
                name: 'Robert Chudleigh',
                initials: 'RC',
                backgroundImageUrl: '/assets/team/rob-profile.jpg', 
                imageUrl: '/assets/team/rob-profile.jpg', 
                shortDescription: 'Robert is a specialist criminal defence lawyer experienced in representing individuals charged with the most serious of crimes including murder and manslaughter. His practice encompasses the representation of individuals following arrest at the police station through to the Magistrates’ Court and the Crown Court.',
                fullDescription: 'Robert is a specialist criminal defence lawyer experienced in representing individuals charged with the most serious of crimes including murder and manslaughter. His practice encompasses the representation of individuals following arrest at the police station through to the Magistrates’ Court and the Crown Court. Robert is a duty Solicitor and a Solicitor Advocate. He has experience of conducting Crown Court trials on behalf of defendants charged with such offences as robbery, burglary, theft and drug supply offences. Robert is a fluent Welsh speaker and is able to represent defendants in either English or Welsh. He is regarded as a highly approachable and skilled lawyer.',
                emailAddress: 'robert@scmlaw.co.uk',
                phoneNumberString: '07771234567',
                phoneNumber: +447771234567
            }, {
                path: 'James-McKenna',
                name: 'James McKenna',
                initials: 'JM',
                backgroundImageUrl: '/assets/team/james-profile.jpg',
                imageUrl: '/assets/team/james-profile.jpg',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam.',
                fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta.',
                emailAddress: 'james@scmlaw.co.uk',
                phoneNumberString: '07771234567',
                phoneNumber: +447771234567
            }
        ];
        this.duty = [
            {
                path: 'Phillip-Thomas',
                name: 'Phillip Thomas',
                initials: 'PT',
                backgroundImageUrl: '/assets/team/phil-profile.jpg',
                imageUrl: '/assets/team/phil-profile.jpg',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam.',
                fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta.',
                emailAddress: 'example@example.com',
                phoneNumberString: '07771234567',
                phoneNumber: +447771234567
            }
        ];
        this.admin = [
            {
                path: 'Deb-Admin',
                name: 'Deb Admin',
                initials: 'DA',
                backgroundImageUrl: '/assets/team/deb-profile.jpg',
                imageUrl: '/assets/team/deb-profile.jpg',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam.',
                fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta.',
                emailAddress: 'example@example.com',
                phoneNumberString: '07771234567',
                phoneNumber: +447771234567
            }, {
                path: 'Jackie-Admin',
                name: 'Jackie Admin',
                initials: 'JA',
                backgroundImageUrl: '/assets/team/jackie-profile.jpg',
                imageUrl: '/assets/team/jackie-profile.jpg',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam.',
                fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta.',
                emailAddress: 'example@example.com',
                phoneNumberString: '07771234567',
                phoneNumber: +447771234567
            }, {
                path: 'Mary-Admin',
                name: 'Mary Admin',
                initials: 'MA',
                backgroundImageUrl: '/assets/team/mary-profile.jpg',
                imageUrl: '/assets/team/mary-profile.jpg',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam.',
                fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta.',
                emailAddress: 'example@example.com',
                phoneNumberString: '07771234567',
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

    goToTeamDetail(_urlPath: string, _name: string, _initials: string, _imageUrl: string, _shortDescription: string, _fullDescription: string, _emailAddress: string, _phoneNumberString: string, _phoneNumber: number) {

        // navigate to team detail.
        this._router.navigate(['/team', _urlPath]);

        // pass data to shared storage
        this._dataStorageService.setTeamMember(_urlPath, _name, _initials, _imageUrl, _shortDescription, _fullDescription, _emailAddress, _phoneNumberString, _phoneNumber);
    }

    userClicked() {
        console.log('Team member clicked');
    }
}