import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../service/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent {
  heroes:Heroe[]= [];
  termino:string = "";

  constructor(  private activatedRoute: ActivatedRoute,
                private _heroesService:HeroesService){
    this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino']);
      console.log(this.heroes);
    } );
  }

}
