import http from 'http';
import { app } from './app';
import { loadPlanetsData } from './models/planets.model';


const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

startServer();

async function startServer(){
    await loadPlanetsData();
    
    server.listen(PORT,()=>{
        console.log("Listening at "+PORT)
    });
    
}
