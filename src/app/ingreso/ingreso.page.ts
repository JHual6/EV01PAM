import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../servicios/storage.service';
import { AutenticacionService } from '../servicios/autenticacion.service'; 

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  username: string = "";
  password: string = "";
  errorMessage: string = "";

  constructor(
    private router: Router,
    private storageService: StorageService,
    private authService: AutenticacionService 
  ) { }

  login() {
    this.errorMessage = "";

    this.storageService.getUsuarios().then(usuarios => {
      const usuarioEncontrado = usuarios?.find(user => user.nombre === this.username);

      if (usuarioEncontrado && usuarioEncontrado.contrasena === this.password) {
        // Llamar a iniciarSesion pasando solo el nombre del usuario
        this.authService.iniciarSesion(usuarioEncontrado.nombre);
        
        this.router.navigate(['/inicio'], { queryParams: { username: this.username } });
        
      } else if (!usuarioEncontrado) {
        this.errorMessage = "El usuario no existe";
      } else {
        this.errorMessage = "Contraseña incorrecta";
      }
    });
  }

  async ngOnInit() {

    const contrasenaJona = await this.storageService.getContrasena('jona');
    if (!contrasenaJona) {
      await this.storageService.addUsuario('jona', 'jona123', 'estudiante');
    }
  
    const contrasenaProfesor = await this.storageService.getContrasena('profesor');
    if (!contrasenaProfesor) {
      await this.storageService.addUsuario('profesor', 'profesor123', 'profesor');
    }
    
    const contrasenaAdmin = await this.storageService.getContrasena('admin1');
    if (!contrasenaAdmin) {
      await this.storageService.addUsuario('admin1', 'admin123', 'administrador');
    }

  }
}
