import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';
import { CredenciaisDTO } from 'src/models/credenciais.dto';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(public navCtrl: NavController, public router: Router, public menu: MenuController) {
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }
  
  ionViewDidLeave() {
    this.menu.enable(true);
  }

  login(){
    console.log(this.creds);
    this.navCtrl.navigateRoot(['categorias']);
  }

}
