import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  menuopen : boolean = false
  menu : boolean = false
  submenu : boolean = false

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
      ],
      showsubcategories: false
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
      ],
      showsubcategories: false
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
      ],
      showsubcategories: false
    },
    {
      name: 'CINTURONES',
      url: '#',
      subcategories: [
        {
          name: 'Unifaz',
          url: '#'
        },
        {
          name: 'Doblefaz',
          url: '#'
        },
        {
          name: 'Cuero',
          url: '#'
        },
        {
          name: 'Otros materiales',
          url: '#'
        }
      ],
      showsubcategories: false
    }
  ];

  subcategories(index: number){
    this.categories[index].showsubcategories = !this.categories[index].showsubcategories;
  }
}