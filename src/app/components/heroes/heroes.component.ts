import { Component, OnInit } from '@angular/core';
import { HeroService,Hero } from '../../service/hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  
  // hero:any[]=[];
  hero:Hero[]=[];
  constructor( private _heroService: HeroService, private _router: Router) { 
  }
  tipo:boolean;
  ngOnInit(): void {
    if(this._router.url=="/villains"){
      this.tipo=false;
      this.hero = this._heroService.getVillains();
    }else{
      this.tipo=true;
      this.hero = this._heroService.getHeros();
    }
    console.log(this.hero);
  }
  
  verHeroe(id:number){
    if(this.tipo){
      this._router.navigate(['/hdetalles',id]);
    }else{
      this._router.navigate(['/vdetalles',id]);
    }
  }


}
