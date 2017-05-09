import { Component } from '@angular/core';

@Component({
    selector: 'location',
    templateUrl: 'location.component.html',
    styleUrls: [ 'location.component.scss' ]
})

export class LocationComponent {

    // make sure we always arrive back at top of page.
    ngAfterViewChecked() {
        window.scrollTo(0, 0);
    }

}