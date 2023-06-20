import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PaymentsModule } from '@modules/payments/payments.module';

import { MatBadgeModule } from '@angular/material/badge';
import { CardProductComponent } from './components/card-product/card-product.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CardProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PaymentsModule,
    MatBadgeModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CardProductComponent
  ]
})
export class SharedModule { }
