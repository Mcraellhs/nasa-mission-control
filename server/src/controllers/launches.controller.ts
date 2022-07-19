import { validate, validateOrReject } from "class-validator";
import { Request,Response } from "express";
import { CreateLaunchDto } from "../dtos/CreateLaunchDto";
import { LaunchMapper } from "../mappers/LaunchMapper";
import { Launch, LaunchModel } from "../models/launches.model";


export class LaunchController {

    private static launchesModel:LaunchModel=new LaunchModel();
    private constructor(){}

    public static getLaunches(req:Request,res:Response){
       return  res.status(200).json(LaunchController.launchesModel.getLaunches());
    }

    
    public static createLaunch(req:Request,res:Response){
        const launchDto=new CreateLaunchDto({...req.body})
        validateOrReject(launchDto).then(()=>{

            const launch:Launch = LaunchMapper.toLaunch(launchDto);
            LaunchController.launchesModel.addLaunch(launch);

            return res.status(201).json(launch);
        }).catch((err)=>{
            return res.status(400).json({error:err})
        })
    }

    public static abortLaunch(req:Request,res:Response){
        const id:number=parseInt(req.params.id);

        try{
            const launch = LaunchController.launchesModel.getLaunch(id);
            LaunchController.launchesModel.abortLaunch(launch);
            return res.status(200).json(launch);
        }catch(err){
            return res.status(404).json({error:err})
        }

    }

}