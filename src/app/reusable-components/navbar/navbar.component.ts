import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  img = './assets/navbar/menu-hamburguesa.png'
  menu : boolean = false

  categories = [
    {
      name: 'NUEVO',
      url: '/productos/nuevo',
      subcategories: [
        {
          name: 'Mujer',
          url: '/productos/nuevo/mujer'
        },
        {
          name: 'Hombre',
          url: '/productos/nuevo/hombre'
        },
        {
          name: 'Cuero',
          url: '/productos/nuevo/cuero'
        },
        {
          name: 'Otros materiales',
          url: '/productos/nuevo/otros'
        }
      ]
    },
    {
      name: 'BOLSOS',
      url: '/productos/bolsos',
      subcategories: [
        {
          name: 'Morrales',
          url: '/productos/nuevo/morrales'
        },
        {
          name: 'Manos libres',
          url: '/productos/bolsos/m-libre'
        },
        {
          name: 'Riñoneras',
          url: '/productos/bolsos/riñoneras'
        },
        {
          name: 'Cuero',
          url: '/productos/bolsos/cuero'
        },
        {
          name: 'Otros materiales',
          url: '/productos/bolsos/otros'
        }
      ]
    },
    {
      name: 'ACCESORIOS',
      url: '/productos/accesorios',
      subcategories: [
        {
          name: 'Billeteras',
          url: '/productos/accesorios/billeteras'
        },
        {
          name: 'Monederos',
          url: '/productos/accesorios/monederos'
        },
        {
          name: 'Cuero',
          url: '/productos/accesorios/cuero'
        },
        {
          name: 'Otros materiales',
          url: '/productos/accesorios/otros'
        }
      ]
    },
    {
      name: 'CINTURONES',
      url: '/productos/cinturones',
      subcategories: [
        {
          name: 'Unifaz',
          url: '/productos/cinturones/unifaz'
        },
        {
          name: 'Doblefaz',
          url: '/productos/cinturones/doblefaz'
        },
        {
          name: 'Cuero',
          url: '/productos/accesorios/cuero'
        },
        {
          name: 'Otros materiales',
          url: '/productos/accesorios/otros'
        }
      ]
    }
  ]
}