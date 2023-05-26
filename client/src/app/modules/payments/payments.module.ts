import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './components/payments/payments.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    PaymentsComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    MatStepperModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    ShoppingCartComponent
  ]
})
export class PaymentsModule { }
