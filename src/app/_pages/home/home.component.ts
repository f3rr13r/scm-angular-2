import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: [ 'home.component.scss' ]
})

export class HomeComponent {

    buttonClicked() {
        console.log("Button is clicked");
    }
}