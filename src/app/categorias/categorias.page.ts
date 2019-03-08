import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/services/domain/categoria.service';
import { CategoriaDTO } from 'src/models/categoria.dto';
import { API_CONFIG } from 'src/Config/api.config';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  bucketUrl = API_CONFIG.bucketBaseUrl;

  items: CategoriaDTO[];

  constructor(public categoriaService: CategoriaService) { }

  ngOnInit() {
   
  }

  ionViewDidEnter(){
    
    this.categoriaService.findAll() 
      .subscribe(response => {
        this.items = response;
      },
        error => {
          console.log(error);
      });
  }
}
