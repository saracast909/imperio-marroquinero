import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { GiftsComponent } from './components/gifts/gifts.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SettingComponent } from './components/setting/setting.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'gifts',
    component: GiftsComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  },
  {
    path: 'help',
    component: SettingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
