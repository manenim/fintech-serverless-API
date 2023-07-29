"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRolesController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const user_roles_service_1 = require("./user-roles.service");
const register_user_dto_ts_1 = require("../users/dto/register-user.dto.ts");
let UserRolesController = class UserRolesController {
    constructor(userRolesService) {
        this.userRolesService = userRolesService;
    }
    getRenters() {
        return this.userRolesService.getRenters();
    }
    getBuyers() {
        return this.userRolesService.getBuyers();
    }
};
__decorate([
    (0, common_1.Get)('renters'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all renters',
        description: 'Retrieve a list of all renters.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of users',
        type: [register_user_dto_ts_1.RegisterUserDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserRolesController.prototype, "getRenters", null);
__decorate([
    (0, common_1.Get)('buyers'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all buyers',
        description: 'Retrieve a list of all buyers.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of buyers',
        type: [register_user_dto_ts_1.RegisterUserDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserRolesController.prototype, "getBuyers", null);
UserRolesController = __decorate([
    (0, common_1.Controller)('role'),
    __metadata("design:paramtypes", [user_roles_service_1.UserRolesService])
], UserRolesController);
exports.UserRolesController = UserRolesController;
//# sourceMappingURL=user-roles.controller.js.map