"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchMapper = void 0;
class LaunchMapper {
    constructor() { }
    static toLaunch(data) {
        return {
            flightNumber: null,
            mission: data.mission,
            rocket: data.rocket,
            launchDate: new Date(data.launchDate),
            target: data.target,
            customer: null,
            upcoming: null,
            success: null
        };
    }
}
exports.LaunchMapper = LaunchMapper;
