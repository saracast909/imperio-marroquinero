import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from '@shared/shared.module';
import { ProfileComponent } from './components/profile/profile.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { GiftsComponent } from './components/gifts/gifts.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SettingComponent } from './components/setting/setting.component';
import { HelpComponent } from './components/help/help.component';


@NgModule({
  declarations: [
    SidebarComponent,
    ProfileComponent,
    FavoritesComponent,
    GiftsComponent,
    OrdersComponent,
    SettingComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
