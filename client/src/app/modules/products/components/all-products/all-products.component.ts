import { Component } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  products = [
    {
      "imagen" : "/assets/products/image.png",
      "nombre" : "Morral Maqui Negro",
      "precio" : "$50.000"
    },
    {
      "imagen" : "/assets/products/image-two.png",
      "nombre" : "Bolso Abi Azul",
      "precio" : "$55.000"
    },
    {
      "imagen" : "/assets/products/image-three.png",
      "nombre" : "Bolso Margarita Rosa",
      "precio" : "$45.000"
    },
    {
      "imagen" : "/assets/products/image-four.png",
      "nombre" : "Bolso Noche Azul",
      "precio" : "$60.000"
    },
    {
      "imagen" : "/assets/products/image-six.png",
      "nombre" : "Bolso Venus Multicolor",
      "precio" : "$55.000"
    },
    {
      "imagen" : "/assets/products/image-eight.png",
      "nombre" : "Morral Bloom Negro",
      "precio" : "$50.000"
    },
    {
      "imagen" : "/assets/products/image-nine.png",
      "nombre" : "Bolso Mini Lili Negro",
      "precio" : "$45.000"
    },
    {
      "imagen" : "/assets/products/image-ten.png",
      "nombre" : "Morral Bloom Blanco",
      "precio" : "$50.000"
    }
  ]
}
