import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './components/payments/payments.component';
import { MatStepperModule } from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    PaymentsComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class PaymentsModule { }
