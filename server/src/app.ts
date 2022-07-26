import express from 'express';
import cors from 'cors';
import { PlanetRouter } from './routes/planets.router';
import path from 'path';
import { LaunchRouter } from './routes/launches.router';




export const app=express();

app.use(cors());

app.use(express.json())
app.use(express.static(path.join(__dirname,'..','public')));

PlanetRouter.init(app,express.Router());
LaunchRouter.init(app,express.Router());
app.get('/*',(req,res)=>{
   res.sendFile(path.join(__dirname,'../public/index.html'))
})


