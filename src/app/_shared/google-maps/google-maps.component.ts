import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { DataStorageService } from '../../data/data.storage';

@Component({
    selector: 'google-maps',
    templateUrl: 'google-maps.component.html',
    styleUrls: ['google-maps.component.scss'],
    providers: [ DataStorageService ]
})

export class GoogleMapsComponent implements OnInit {
    lat: number = 51.507914;
    lng: number = -3.577515;

    offices: any[] = [];

    constructor(private _router: Router,
                private _sharedDataService: DataStorageService) { }

    ngOnInit() {
        this.offices = this._sharedDataService.getOfficeLocations();
    }

    navigateToFindUs(location: string) {
        this._router.navigate(['/find-us', location.toLowerCase()]);
    }
 }
