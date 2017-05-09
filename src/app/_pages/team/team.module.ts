import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* -- shared -- */
import { _SharedModule } from '../../_shared/shared.module';

import { TeamDetailComponent } from './team-detail/team-detail.component';

const appRoutes: Routes = [
  { path: 'team/:name', component: TeamDetailComponent }
]

@NgModule({
  imports: [
    _SharedModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    TeamDetailComponent
  ],
  declarations: [
    TeamDetailComponent
  ],
  providers: [
  ],
})

export class TeamModule { }