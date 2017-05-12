import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { Location } from './models/location.interface';

@Component({
    selector: 'google-maps',
    templateUrl: 'google-maps.component.html',
    styleUrls: ['google-maps.component.scss']
})

export class GoogleMapsComponent {
    lat: number = 51.507914;
    lng: number = -3.577515;

    offices: Location[] = [
        {
            latitude: 51.5070346,
            longitude: -3.5786352,
            address1: '1st Floor',
            address2: '14 Wyndham Street',
            city: 'BRIDGEND',
            postcode: 'CF31 1EF'
        }, {
            latitude: 51.6187044,
            longitude: -3.939985,
            address1: 'Metropole Chambers',
            address2: 'Salubrious Passage, Wind Street',
            city: 'SWANSEA',
            postcode: 'SA1 3RT'
        }, {
           latitude: 51.4866957,
           longitude: -3.1587076,
           address1: '10 Clifton Street',
           address2: 'Adamsdown',
           city: 'CARDIFF',
           postcode: 'CF24 1PW'
        }
    ]

    constructor(private _router: Router) { }

    navigateToFindUs() {
        this._router.navigateByUrl('/find-us');
    }
 }
