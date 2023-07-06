import { Component, OnInit} from '@angular/core';
import { FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{
  
  get name(){
    return this.formRegister.get('name') as FormControl
  };
  get lastname(){
    return this.formRegister.get('lastname') as FormControl
  };
  get email(){
    return this.formRegister.get('email') as FormControl
  };
  get phone(){
    return this.formRegister.get('phone') as FormControl
  };
  get password(){
    return this.formRegister.get('password') as FormControl
  }
  get conf_password(){
    return this.formRegister.get('conf_password') as FormControl
  }
  get tyc(){
    return this.formRegister.get('tyc') as FormControl
  }


  formRegister: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.formRegister = new FormGroup(
      {
        name: new FormControl('', Validators.required),
        lastname: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.pattern("^[^ ]+@[^ ]+\.[a-z]{2,6}$")]),
        phone: new FormControl('', Validators.required),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        conf_password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        tyc: new FormControl('', [Validators.requiredTrue])
      }
    )
  }

  typepass: boolean = true;
  typeconfpass: boolean = true; 

  sendRegister(): void {
    const body = this.formRegister.value;
    console.log(body);
  }
}