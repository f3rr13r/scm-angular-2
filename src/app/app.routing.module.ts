import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent } from './_pages/home/home.component';
import { NotFoundComponent } from './404/not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }


