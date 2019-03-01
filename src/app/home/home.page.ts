import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public navCtrl: NavController, public router: Router, public menu: MenuController) {
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }
  
  ionViewDidLeave() {
    this.menu.enable(true);
  }

  login(){
    this.navCtrl.navigateRoot(['categorias']);
  }

}
