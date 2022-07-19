"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanetRouter = void 0;
const planets_controller_1 = require("../controllers/planets.controller");
class PlanetRouter {
    constructor() { }
    static init(app, router) {
        router.get('/', planets_controller_1.PlanetController.getPlanets);
        app.use('/api/planets', router);
    }
}
exports.PlanetRouter = PlanetRouter;
