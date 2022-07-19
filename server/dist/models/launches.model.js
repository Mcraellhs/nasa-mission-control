"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchModel = void 0;
class LaunchModel {
    constructor() {
        this.launchID = 0;
        this.launches = [];
    }
    addLaunch(launch) {
        launch.flightNumber = this.launchID++;
        launch.customer = ["Ahmed"];
        launch.upcoming = true;
        launch.success = true;
        this.launches.push(launch);
    }
    getLaunch(flightNumber) {
        const launch = this.launches.find(x => x.flightNumber === flightNumber);
        if (!launch) {
            throw "Launch by `${flightNumber}` is not found ";
        }
        return launch;
    }
    getLaunches() {
        return this.launches;
    }
    abortLaunch(launch) {
        launch.upcoming = false;
        launch.success = false;
    }
}
exports.LaunchModel = LaunchModel;
