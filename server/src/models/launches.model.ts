

export interface Launch {
     flightNumber?:number;
     mission:string;
     rocket:string;
     launchDate:Date;
     target:string;
     customer:string[];
     upcoming:boolean;
     success:boolean;
}



export class LaunchModel{
    private launchID:number=0;
    private launches:Launch[]=[];


    public addLaunch(launch:Launch){

        launch.flightNumber=this.launchID++;
        launch.customer=["Ahmed"];
        launch.upcoming=true;
        launch.success=true;
        this.launches.push(launch);
    }

    public getLaunch(flightNumber:number): Launch{
        const launch:Launch=this.launches.find(x=>x.flightNumber===flightNumber);
          if(!launch){
        throw "Launch by `${flightNumber}` is not found ";
          }
        return launch;
    }

    public getLaunches(){
        return this.launches;
    }

    public abortLaunch(launch:Launch){
      launch.upcoming=false;
      launch.success=false;
    }

   
    

}