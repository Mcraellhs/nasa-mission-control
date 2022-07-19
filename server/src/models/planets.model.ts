import path from 'path';
import * as fs from 'fs';
import  * as parse from 'csv-parse';



export const planets:string[]=[];

export async function loadPlanetsData(){

    return new Promise((resolve,reject)=>{
       fs.createReadStream(path.join(__dirname,'..','data','kepler_data.csv'))
       .pipe(parse.parse({
         comment: '#',
         columns: true,
       }))
       .on('data', (data:string) => {
         if (isHabitablePlanet(data)) {
            planets.push(data);
         }
       })
       .on('error', (err:any) => {
         console.log(err);
         reject(err);
       })
       .on('end', () => {
         console.log(planets.map((planet:any) => {
           return planet['kepler_name'];
         }));
         console.log(`${planets.length} habitable planets found!`);
         resolve({});
       });
    })

   }

   function isHabitablePlanet(planet:any) {
       return planet['koi_disposition'] === 'CONFIRMED'
         && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
         && planet['koi_prad'] < 1.6;
     }