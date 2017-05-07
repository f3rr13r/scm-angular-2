import { NgModule } from '@angular/core';

import { _SharedModule } from '../_shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { HeaderContactComponent } from './header/header-contact/header-contact.component';
import { FooterComponent } from './footer/footer.component';
import { FooterContactComponent } from './footer/footer-contact/footer-contact.component';

@NgModule({
  imports: [
    _SharedModule,
  ],
  exports: [
    HeaderComponent,
    HeaderContactComponent,
    FooterComponent,
    FooterContactComponent
  ],
  declarations: [
    HeaderComponent,
    HeaderContactComponent,
    FooterComponent,
    FooterContactComponent
  ],
  providers: [
  ],
})
export class LayoutModule { }
