import { Component } from '@angular/core';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent {

  gifts = [
    {
      name: 'Envio gratuito',
      descripcion: 'Por compras superiores a $0',
      codigo: 'EVGSC',
      finicio: '21/07/2023',
      ffinal: '10/08/2023',
      paplica: 'Para todos los productos'
    },
    {
      name: '15% de descuento',
      descripcion: 'Por compras superiores a $0',
      codigo: 'DSCCG',
      finicio: '21/07/2023',
      ffinal: '10/08/2023',
      paplica: 'Para todos los productos'
    },
    {
      name: '15% de descuento',
      descripcion: 'Por compras superiores a $0',
      codigo: 'QPYTGF',
      finicio: '21/07/2023',
      ffinal: '10/08/2023',
      paplica: 'Para todos los productos'
    }
]
}
