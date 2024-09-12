import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  username: string = "";
  errorMessage: string = "";

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() { }

  async resetPassword() {

    const userPasswords: { [key: string]: string } = {
      "jonathan123": "jona123"
    };

    if (this.username in userPasswords) {
      const password = userPasswords[this.username];
      const alert = await this.alertController.create({
        header: 'Contraseña recuperada',
        message: `Tu contraseña es: ${password}`,
        buttons: ['OK']
      });

      await alert.present();
      await alert.onDidDismiss();
      this.router.navigate(['/']);
      
    } else {
      this.errorMessage = "El usuario no existe";
    }
  }

}
