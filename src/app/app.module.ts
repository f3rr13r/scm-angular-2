// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// 3rd party
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


/* -- shared & layout -- */
import { _SharedModule } from './_shared/shared.module';
import { LayoutModule } from './_layout/layout.module';

// app modules
import { AppRoutingModule } from './app.routing.module';
import { PagesModule } from './_pages/pages.module';
import { ServicesModule } from './_pages/services/services.module';
import { TeamModule } from './_pages/team/team.module'; 

// app components
import { AppComponent } from './app.component';
import { NotFoundComponent } from './404/not-found.component';
import { HomeComponent } from './_pages/home/home.component';

// import { enableProdMode } from '@angular/core';
// enableProdMode();

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [
    // angular
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),

    // core, shared & layout
    _SharedModule,
    LayoutModule,

    // pages modules
    PagesModule,
    ServicesModule,
    TeamModule
  ],
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

