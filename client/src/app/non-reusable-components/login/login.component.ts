import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder){
  }

  get email(){
    return this.formLogin.get('email') as FormControl
  };
  get password(){
    return this.formLogin.get('password') as FormControl
  };

  formLogin = this.fb.group({
    'email': ['', [Validators.required, Validators.pattern("^[^ ]+@[^ ]+\.[a-z]{2,6}$")]],
    'password': ['', Validators.required]
  })

  procesar(){
    const dates = {
      email: this.email.value, 
      password: this.password.value,
    };

    console.log(dates)
  }

}
