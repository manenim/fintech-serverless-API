"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRolesModule = void 0;
const common_1 = require("@nestjs/common");
const user_roles_service_1 = require("./user-roles.service");
const user_roles_controller_1 = require("./user-roles.controller");
let UserRolesModule = class UserRolesModule {
};
UserRolesModule = __decorate([
    (0, common_1.Module)({
        controllers: [user_roles_controller_1.UserRolesController],
        providers: [user_roles_service_1.UserRolesService]
    })
], UserRolesModule);
exports.UserRolesModule = UserRolesModule;
//# sourceMappingURL=user-roles.module.js.map