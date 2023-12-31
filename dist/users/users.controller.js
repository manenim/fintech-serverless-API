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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const register_user_dto_ts_1 = require("./dto/register-user.dto.ts");
const get_user_by_id_dto_1 = require("./dto/get-user-by-id.dto");
const swagger_1 = require("@nestjs/swagger");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    register(registerUserDto) {
        return this.usersService.register(registerUserDto);
    }
    getAllUsers() {
        return this.usersService.getAllUsers();
    }
    getUserById(id) {
        return this.usersService.getUserById(id);
    }
    deleteUser(id) {
        return this.usersService.deleteUser(id);
    }
    async insertData() {
        const dataToInsert = [];
        return this.usersService.batchInsertData(dataToInsert);
    }
};
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a user', description: 'Create a new user.' }),
    (0, swagger_1.ApiBody)({ type: register_user_dto_ts_1.RegisterUserDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The created user',
        type: register_user_dto_ts_1.RegisterUserDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_user_dto_ts_1.RegisterUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "register", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all users',
        description: 'Retrieve a list of all users.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of users',
        type: [register_user_dto_ts_1.RegisterUserDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get user by id',
        description: 'Retrieves a user by the UserId.',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the user', type: String }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Get a User',
        type: [register_user_dto_ts_1.RegisterUserDto],
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_user_by_id_dto_1.getUserByIdDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete a user',
        description: 'Delete a user from the DB.',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the user', type: String }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Deleted the user',
        type: register_user_dto_ts_1.RegisterUserDto,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_user_by_id_dto_1.getUserByIdDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Get)('/send/insertData'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "insertData", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map