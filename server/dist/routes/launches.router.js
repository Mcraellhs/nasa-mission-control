"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchRouter = void 0;
const launches_controller_1 = require("../controllers/launches.controller");
class LaunchRouter {
    constructor() { }
    static init(app, router) {
        router.get('/', launches_controller_1.LaunchController.getLaunches);
        router.post('/', launches_controller_1.LaunchController.createLaunch);
        router.delete('/:id', launches_controller_1.LaunchController.abortLaunch);
        app.use('/api/launches', router);
    }
}
exports.LaunchRouter = LaunchRouter;
