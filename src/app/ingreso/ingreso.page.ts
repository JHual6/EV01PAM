import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  username: string = "";
  password: string = "";
  errorMessage: string = "";

  constructor(private router: Router) { }

  login() {
    this.errorMessage = "";

    if (this.username === "jonathan123" && this.password === "jona123") {
      this.router.navigate(['/inicio'], { queryParams: { username: this.username, password: this.password } });
    } else if (this.username !== "jonathan123" && this.password === "jona123") {
      this.errorMessage = "El usuario no existe";
    } else {
      this.errorMessage = "Usuario o contraseña incorrectos";
    }
  }

  ngOnInit() {
  }

}
