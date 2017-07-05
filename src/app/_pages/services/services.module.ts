import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* -- shared -- */
import { _SharedModule } from '../../_shared/shared.module';

// shared services
import { DataStorageService } from './data/data.storage';

// components
import { ServicesDetailComponent } from './services-detail/services-detail.component';

const appRoutes: Routes = [
  { path: 'services/:name', component: ServicesDetailComponent }
]

@NgModule({
  imports: [
    _SharedModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    ServicesDetailComponent
  ],
  declarations: [
    ServicesDetailComponent
  ],
  providers: [ DataStorageService ],
})

export class ServicesModule { }

