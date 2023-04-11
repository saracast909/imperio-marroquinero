import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component-of-components/home/home.component';
import { LoginComponent } from './non-reusable-components/login/login.component';
import { RegisterComponent } from './non-reusable-components/register/register.component';
import { NavbarComponent } from './reusable-components/navbar/navbar.component';
import { FooterComponent } from './reusable-components/footer/footer.component';
import { ProductoComponent } from './non-reusable-components/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
