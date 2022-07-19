import { Router,Express } from "express";
import { PlanetController } from "../controllers/planets.controller";


export class PlanetRouter{

  private constructor(){}



  public static init(app:Express,router:Router){

    router.get('/',PlanetController.getPlanets)

    app.use('/api/planets',router);

  }

}