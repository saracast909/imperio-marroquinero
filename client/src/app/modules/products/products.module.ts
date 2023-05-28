import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ProductoComponent } from './components/producto/producto.component';
import { AllProductsComponent } from './components/all-products/all-products.component';

@NgModule({
  declarations: [
    ProductoComponent,
    AllProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
