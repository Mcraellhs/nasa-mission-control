"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanetController = void 0;
const planets_model_1 = require("../models/planets.model");
class PlanetController {
    constructor() { }
    static getPlanets(req, res) {
        res.status(200).json(planets_model_1.planets);
    }
}
exports.PlanetController = PlanetController;
