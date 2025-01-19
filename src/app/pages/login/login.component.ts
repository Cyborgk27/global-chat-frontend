import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ILogin } from '../../models/message.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  loginData: ILogin = {
    email: '',
    password: '',
  };

  onSubmit() {
    if (this.loginData.email && this.loginData.password) {
      console.log('Datos de inicio de sesión:', this.loginData);
    }
  }

}
