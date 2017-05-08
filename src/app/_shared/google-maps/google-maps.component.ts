import { Component } from '@angular/core';

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
            address: '1st Floor, 14 Wyndham Street',
            city: 'BRIDGEND',
            postcode: 'CF31 1EF'
        }, {
            latitude: 51.6187044,
            longitude: -3.939985,
            address: 'Metropole Chambers, Salubrious Passage, Wind Street',
            city: 'SWANSEA',
            postcode: 'SA1 3RT'
        }, {
           latitude: 51.4866957,
           longitude: -3.1587076,
           address: '10 Clifton Street, Adamsdown, Cardiff',
           city: 'CARDIFF',
           postcode: 'CF24 1PW'
        }
    ]
 }
