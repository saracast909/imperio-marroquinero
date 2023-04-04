import { Component} from '@angular/core';
import { FormControl, Validators, FormBuilder} from '@angular/forms';
interface IRegisterForm{
  name: string;
  lastname: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  constructor(private fb: FormBuilder){
  }
  get name(){
    return this.formRegister.get('name') as FormControl
  };
  get lastname(){
    return this.formRegister.get('lastname') as FormControl
  };
  get email(){
    return this.formRegister.get('email') as FormControl
  };
  get password(){
    return this.formRegister.get('password') as FormControl
  };

  formRegister = this.fb.group({
    'name': ['', Validators.required],
    'lastname': ['', Validators.required],
    'email': ['', [Validators.required, Validators.pattern("^[^ ]+@[^ ]+\.[a-z]{2,6}$")]],
    'password': ['', [Validators.required, Validators.minLength(6)]]
  }
  )
  
  procesar(){
    const dates = {
      name: this.name.value, 
      lastname: this.lastname.value, 
      email: this.email.value, 
      password: this.password.value,
    };

    console.log(dates)
  }

}
