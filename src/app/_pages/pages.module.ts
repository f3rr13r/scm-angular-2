import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { _SharedModule } from "../_shared/shared.module";

import { FindUsComponent } from "./find-us/find-us.component";
import { ServicesComponent } from "./services/services.component";
import { HomeComponent } from "./home/home.component";
import { TeamComponent } from "./team/team.component";
import { NotableCasesComponent } from "./services/notable-cases/notable-cases.component";

const companyRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "services", component: ServicesComponent },
  { path: "notable-cases", component: NotableCasesComponent },
  { path: "find-us", component: FindUsComponent },
  { path: "find-us/:location", component: FindUsComponent },
  { path: "team", component: TeamComponent }
];

@NgModule({
  imports: [_SharedModule, RouterModule.forChild(companyRoutes)],
  exports: [],
  declarations: [
    HomeComponent,
    TeamComponent,
    ServicesComponent,
    NotableCasesComponent,
    FindUsComponent
  ],
  providers: []
})
export class PagesModule {}
