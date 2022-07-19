"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchController = void 0;
const class_validator_1 = require("class-validator");
const CreateLaunchDto_1 = require("../dtos/CreateLaunchDto");
const LaunchMapper_1 = require("../mappers/LaunchMapper");
const launches_model_1 = require("../models/launches.model");
class LaunchController {
    constructor() { }
    static getLaunches(req, res) {
        return res.status(200).json(LaunchController.launchesModel.getLaunches());
    }
    static createLaunch(req, res) {
        const launchDto = new CreateLaunchDto_1.CreateLaunchDto(Object.assign({}, req.body));
        (0, class_validator_1.validateOrReject)(launchDto).then(() => {
            const launch = LaunchMapper_1.LaunchMapper.toLaunch(launchDto);
            LaunchController.launchesModel.addLaunch(launch);
            return res.status(201).json(launch);
        }).catch((err) => {
            return res.status(400).json({ error: err });
        });
    }
    static abortLaunch(req, res) {
        const id = parseInt(req.params.id);
        try {
            const launch = LaunchController.launchesModel.getLaunch(id);
            LaunchController.launchesModel.abortLaunch(launch);
            return res.status(200).json(launch);
        }
        catch (err) {
            return res.status(404).json({ error: err });
        }
    }
}
exports.LaunchController = LaunchController;
LaunchController.launchesModel = new launches_model_1.LaunchModel();
