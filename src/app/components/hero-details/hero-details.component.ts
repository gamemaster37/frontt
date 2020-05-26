import { Component, OnInit } from '@angular/core';
import { HeroService ,Hero  } from '../../service/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styles: [
  ]
})
export class HeroDetailsComponent implements OnInit {

   hero:any = [];
   imgCasa:string;

  constructor(private _activeRoute: ActivatedRoute, private _heroService:HeroService,private _location:Location, private _router:Router) {
   
    this._activeRoute.params.subscribe( params=>{
      //console.log(params['id']);
      if(this._router.url.includes("/vdetalles")){
        this.hero = this._heroService.getVillain(params['id']);
      }else{
        this.hero = this._heroService.getHero(params['id']);
      }  
    })
   }

  goBack(): void {
    this._location.back();
  }
  
  ngOnInit(): void {
  }

}
