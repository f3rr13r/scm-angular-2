import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { _SharedModule } from '../_shared/shared.module';

import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { LocationComponent } from './location/location.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';

const companyRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'location', component: LocationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'team', component: TeamComponent },
]

@NgModule({
  imports: [
    _SharedModule,
    RouterModule.forChild(companyRoutes)
  ],
  exports: [
  ],
  declarations: [
    HomeComponent,
    TeamComponent,
    ServicesComponent,
    LocationComponent,
    ContactComponent
  ],
  providers: [],
})
export class PagesModule { }
