"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const planets_router_1 = require("./routes/planets.router");
const path_1 = __importDefault(require("path"));
const launches_router_1 = require("./routes/launches.router");
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
planets_router_1.PlanetRouter.init(exports.app, express_1.default.Router());
launches_router_1.LaunchRouter.init(exports.app, express_1.default.Router());
exports.app.get('/*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
