"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLaunchDto = void 0;
const class_validator_1 = require("class-validator");
class CreateLaunchDto {
    constructor(body) {
        this.mission = body.mission;
        this.rocket = body.rocket;
        this.launchDate = body.launchDate;
        this.target = body.target;
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Must not be empty' })
], CreateLaunchDto.prototype, "mission", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Must not be empty' })
], CreateLaunchDto.prototype, "rocket", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(undefined, { message: "Must be valid date string" }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Must not be empty' })
], CreateLaunchDto.prototype, "launchDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Must not be empty' })
], CreateLaunchDto.prototype, "target", void 0);
exports.CreateLaunchDto = CreateLaunchDto;
