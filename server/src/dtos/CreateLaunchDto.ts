import { IsDateString, IsNotEmpty, MinLength } from "class-validator";


export class CreateLaunchDto {


    @IsNotEmpty({message: 'Must not be empty'})
    mission:string;

    @IsNotEmpty({message: 'Must not be empty'})
    rocket:string;

    @IsDateString(undefined,{message:"Must be valid date string"})
    @IsNotEmpty({message: 'Must not be empty'})
    launchDate:string;

    @IsNotEmpty({message: 'Must not be empty'})
    target:string;


    constructor(body:{mission:string,rocket:string,launchDate:string,target:string}){
        this.mission=body.mission;
        this.rocket=body.rocket;
        this.launchDate=body.launchDate;
        this.target=body.target;
    }


}