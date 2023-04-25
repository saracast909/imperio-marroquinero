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
      url: '/all-products',
      subcategories: [
        {
          name: 'Mujer',
          url: '/all-products'
        },
        {
          name: 'Hombre',
          url: '/all-products'
        },
        {
          name: 'Cuero',
          url: '/all-products'
        },
        {
          name: 'Otros materiales',
          url: '/all-products'
        }
      ],
      showsubcategories: false
    },
    {
      name: 'BOLSOS',
      url: '/all-products',
      subcategories: [
        {
          name: 'Morrales',
          url: '/all-products'
        },
        {
          name: 'Manos libres',
          url: '/all-products'
        },
        {
          name: 'Riñoneras',
          url: '/all-products'
        },
        {
          name: 'Cuero',
          url: '/all-products'
        },
        {
          name: 'Otros materiales',
          url: '/all-products'
        }
      ],
      showsubcategories: false
    },
    {
      name: 'ACCESORIOS',
      url: '/all-products',
      subcategories: [
        {
          name: 'Billeteras',
          url: '/all-products'
        },
        {
          name: 'Monederos',
          url: '/all-products'
        },
        {
          name: 'Cuero',
          url: '/all-products'
        },
        {
          name: 'Otros materiales',
          url: '/all-products'
        }
      ],
      showsubcategories: false
    },
    {
      name: 'CINTURONES',
      url: '/all-products',
      subcategories: [
        {
          name: 'Unifaz',
          url: '/all-products'
        },
        {
          name: 'Doblefaz',
          url: '/all-products'
        },
        {
          name: 'Cuero',
          url: '/all-products'
        },
        {
          name: 'Otros materiales',
          url: '/all-products'
        }
      ],
      showsubcategories: false
    }
  ];

  subcategories(index: number){
    this.categories[index].showsubcategories = !this.categories[index].showsubcategories;
  }
}