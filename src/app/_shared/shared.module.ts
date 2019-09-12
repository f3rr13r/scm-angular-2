import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// google maps
import { AgmCoreModule } from '@agm/core';

// modules

// components
import { GoogleMapsComponent } from './google-maps/google-maps.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBe--3uk1M3mNAsxPgeHI_RjbfjEvcclFg'
    })
  ],
  exports: [
    // angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    GoogleMapsComponent
  ],
  declarations: [GoogleMapsComponent]
})
export class SharedModule {}
