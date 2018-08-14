import { Component, OnInit } from '@angular/core';

// routing
import { Router } from '@angular/router';

// data model
import { Service } from './models/services-data.interface';

// shared service
import { DataStorageService } from './data/data.storage';


@Component({
    selector: 'services',
    templateUrl: 'services.component.html',
    styleUrls: [ 'services.component.scss' ]
})

export class ServicesComponent implements OnInit {

    constructor(private _router: Router,
                private _dataStorageService: DataStorageService) { }

    services: Service[];
    selectedRow: number;

    // make sure we always arrive back at top of page.
    ngOnInit() {
        window.scrollTo(0, 0);

        this.services = [
           {
               path: "violent-crime-offences",
               title:  "Violent Crime Offences",
               description: "Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.",
               imageUrl: 'url("/assets/services/violent-crime.jpg")',
               crimes: [
                   "Murder",
                   "Section 18 grievous bodily harm with intent",
                   "Section 20 grievous bodily harm",
                   "Actual body harm",
                   "Common Assault"
               ]
            }, {
               path: "sexual-crime-offences",
               title: "Sexual Crime Offences",
               description: "Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.",
               imageUrl: 'url("/assets/services/sexual-offences.jpg")',
               crimes: [
                   "Rape",
                   "Sexual Assault",
                   "Sexual Offences against children",
                   "Possessing indecent images of children",
                   "Child grooming",
                   "Exposure / Voyerism"
               ]
            }, {
               path: "drugs-offences",
               title:  "Drugs Offences",
               description: "Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.",
               imageUrl: 'url("/assets/services/drugs-offences.jpg")',
               crimes: [
                   "Conspiracy to supply",
                   "Possession with intent to supply",
                   "Production of controlled drugs",
                   "Permitting premises to be used",
                   "Possessing controlled drugs"
               ]
            }, {
               path: "fraud-offences",
               title:  "Fraud Offences",
               description: "Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.",
               imageUrl: 'url("/assets/services/fraud-offences.jpg")',
               crimes: [
                   "Conspiracy to defraud",
                   "False representation",
                   "Bribery",
                   "Money Laundering",
                   "TAX / Benefit fraud"
               ]
            }, {
               path: "theft-and-dishonesty-offences",
               title:  "Theft & Dishonesty Offences",
               description: "Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.",
               imageUrl: 'url("/assets/services/theft-offences.jpg")',
               crimes: [
                   "Burglary",
                   "Shoplifting",
                   "Theft from employer",
                   "Handling stolen goods",
                   "Making off without payment"
               ]
            }, {
               path: "cyber-offences",
               title:  "Cyber Offences",
               description: "Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.",
               imageUrl: 'url("/assets/services/cyber-offences.jpg")',
               crimes: [
                   "Child pornography",
                   "Espionage",
                   "Copyright Infringement",
                   "Financial Theft"
               ]
            }, {
               path: "regulatory-offences",
               title:  "Regulatory Offences",
               description: "Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.",
               imageUrl: 'url("/assets/services/regulatory-offences.jpg")',
               crimes: [
                   "Health and safety offences",
                   "Food hygiene offences",
                   "Trading Standards offences",
                   "Licensing offences",
                   "Environment offences"
               ]
            }, {
               path: "motoring-offences",
               title:  "Motoring Offences",
               description: "Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.",
               imageUrl: 'url("/assets/services/motoring-offences.jpg")',
               crimes: [
                   "Dangerous and careless driving",
                   "Driving while under the influence of drink/drugs",
                   "Speeding",
                   "Driving without a license",
                   "Driving without insurance",
                   "Driving whilst disqualified"
               ]
            }
        ]
    }

    showLayer(value: number) {
        this.selectedRow = value;
    }

    hideLayer(value: number) {
        // do something
    }
    
    goToServicesDetail(_path: string, _title: string, _description: string, _imageUrl: string, _crimes: string[]) {

        // pass data to shared storage
        this._dataStorageService.setService(_path, _title, _description, _imageUrl, _crimes);

        // navigate to services detail.
        this._router.navigate(['/services', _path ]);
    }

}