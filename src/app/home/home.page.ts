import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { AuthService } from 'src/services/auth.service';


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

  constructor(public navCtrl: NavController, 
    public router: Router, 
    public menu: MenuController,
    public auth: AuthService) {
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }
  
  ionViewDidLeave() {
    this.menu.enable(true);
  }

  login(){
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        console.log(response.headers.get('Authorization'));
        this.navCtrl.navigateRoot(['categorias']);
      },
      error => {}
      );
    
   
  }

}
