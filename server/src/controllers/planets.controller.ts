
import { Request,Response } from "express";
import { planets } from "../models/planets.model";


export class PlanetController {

   

  private constructor(){}


  public static  getPlanets(req:Request,res:Response){
     res.status(200).json(planets);
  }

}