import { Injectable } from "@angular/core";

// model
import { Location } from '../_shared/google-maps/models/location.interface';

@Injectable()
export class DataStorageService {

    private locations: Location[] = [
        {
            latitude: 51.5070346,
            longitude: -3.5786352,
            address1: '1st Floor',
            address2: '14 Wyndham Street',
            city: 'BRIDGEND',
            postcode: 'CF31 1EF',
            phone: +441656767766,
            openingHours: {
                monday: '09:00 - 17:00',
                tuesday: '09:00 - 17:00',
                wednesday: '09:00 - 17:00',
                thursday: '09:00 - 17:00',
                friday: '09:00 - 17:00',
                saturday: 'Closed',
                sunday: 'Closed'
            },
            imageUrl: 'url(/assets/BridgendMap-image.png)'
        }, {
            latitude: 51.6187044,
            longitude: -3.939985,
            address1: 'Metropole Chambers',
            address2: 'Salubrious Passage, Wind Street',
            city: 'SWANSEA',
            postcode: 'SA1 3RT',
            phone: +441656767766,
            openingHours: {
                monday: '09:00 - 17:00',
                tuesday: '09:00 - 17:00',
                wednesday: '09:00 - 17:00',
                thursday: '09:00 - 17:00',
                friday: '09:00 - 17:00',
                saturday: 'Closed',
                sunday: 'Closed'
            },
            imageUrl: 'url(/assets/SwanseaMap-image.png)'
        }, {
            latitude: 51.4866957,
            longitude: -3.1587076,
            address1: '10 Clifton Street',
            address2: 'Adamsdown',
            city: 'CARDIFF',
            postcode: 'CF24 1PW',
            phone: +441656767766,
            openingHours: {
                monday: '09:00 - 17:00',
                tuesday: '09:00 - 17:00',
                wednesday: '09:00 - 17:00',
                thursday: '09:00 - 17:00',
                friday: '09:00 - 17:00',
                saturday: 'Closed',
                sunday: 'Closed'
            },
            imageUrl: 'url(/assets/CardiffMap-image.png)'
        }
    ]

    getOfficeLocations() {
        return this.locations;
    }
}