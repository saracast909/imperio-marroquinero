import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  get email(){
    return this.formLogin.get('email') as FormControl
  };
  get password(){
    return this.formLogin.get('password') as FormControl
  }

  formLogin: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.pattern("^[^ ]+@[^ ]+\.[a-z]{2,6}$")]),
        password: new FormControl('', Validators.required)
      }
    )
  }

  sendLogin(): void {
    const body = this.formLogin.value;
    console.log(body);
  }
}
