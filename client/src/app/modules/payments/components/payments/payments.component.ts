import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
  providers : [
    {
      provide : STEPPER_GLOBAL_OPTIONS,
       useValue : { displayDefaultIndicatorType : false },
    },
  ]
})
export class PaymentsComponent implements OnInit{

  //Forms
  shippingForm: FormGroup = new FormGroup({});

  ngOnInit(): void{
    this.shippingForm = new FormGroup(
      {
        name: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        dni: new FormControl('', Validators.required),
        telefono: new FormControl('', Validators.required),
        pais: new FormControl('', Validators.required),
        ciudad: new FormControl('', Validators.required),
        calle: new FormControl('', Validators.required),
        numberOne: new FormControl('', Validators.required),
        numberTwo: new FormControl('', Validators.required),
        numberThree: new FormControl('', Validators.required),
        info: new FormControl('')
      }
    )

  }

  // Carrito
  myCart$ = this.cartService.myCart$
  
  constructor(private cartService: CartService) {}

  totalProduct(price: number, units: number){
    return price * units
  }

  delete(id:number){
    this.cartService.delete(id)
  }

  update(operation:string, id:number){
    const product = this.cartService.findproduct(id)

    if(product){
      if(operation === 'minus' && product.cantidad > 0){
        product.cantidad = product.cantidad - 1;
      }
      if(operation === 'add'){
        product.cantidad = product.cantidad + 1;
      }
      if(product.cantidad === 0){
        this.delete(id)
      }
    }
  }

  totalcart(){
    const result = this.cartService.totalcart()
    return result
  }
}