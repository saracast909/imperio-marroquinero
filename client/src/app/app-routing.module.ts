import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './non-reusable-components/login/login.component';
import { RegisterComponent } from './non-reusable-components/register/register.component';
import { ProductoComponent } from './non-reusable-components/producto/producto.component';
import { PageNotFoundComponent } from './non-reusable-components/page-not-found/page-not-found.component';
import { AllProductsComponent } from './non-reusable-components/all-products/all-products.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'producto',
    component: ProductoComponent
  },
  {
    path: 'productos',
    component: AllProductsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
