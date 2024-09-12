import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],    
})
export class InicioPage implements OnInit {

  username: string = "";

  constructor(private route: ActivatedRoute, private alertController: AlertController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['username']) {
        this.username = params['username'];
      }
    });
  }
  async escanearQR(){
    const alert = await this.alertController.create({
      header: 'Abriendo cámara',
      buttons: ['OK']
    });
    await alert.present();
    await alert.onDidDismiss();
  }
}
