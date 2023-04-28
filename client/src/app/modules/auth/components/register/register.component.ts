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
  get password(){
    return this.formRegister.get('password') as FormControl
  }

  formRegister: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.formRegister = new FormGroup(
      {
        name: new FormControl('', Validators.required),
        lastname: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.pattern("^[^ ]+@[^ ]+\.[a-z]{2,6}$")]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
      }
    )
  }

  sendRegister(): void {
    const body = this.formRegister.value;
    console.log(body);
  }
}