import { CreateLaunchDto } from "../dtos/CreateLaunchDto";
import { Launch } from "../models/launches.model";


export class LaunchMapper {

private constructor(){}


public static toLaunch(data:CreateLaunchDto):Launch{

    return {
        flightNumber:null,
        mission:data.mission,
        rocket:data.rocket,
        launchDate:new Date(data.launchDate),
        target:data.target,
        customer:null,
        upcoming:null,
        success:null
    }
}


}