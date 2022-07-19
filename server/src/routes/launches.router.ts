import { Router,Express } from "express";
import { LaunchController } from "../controllers/launches.controller";

export class LaunchRouter{

    private constructor(){}

    public static init(app:Express,router:Router){

        router.get('/',LaunchController.getLaunches);

        router.post('/',LaunchController.createLaunch);

        router.delete('/:id',LaunchController.abortLaunch);

        app.use('/api/launches',router);

    }
}