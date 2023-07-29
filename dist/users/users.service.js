"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = __importDefault(require("../utils/db"));
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const util_dynamodb_1 = require("@aws-sdk/util-dynamodb");
let UsersService = class UsersService {
    async register(registerUserDto) {
        let response;
        try {
            console.log('entered');
            const params = {
                TableName: process.env.DYNAMODB_TABLE_NAME,
                Item: (0, util_dynamodb_1.marshall)(registerUserDto || {}),
            };
            const createResult = await db_1.default.send(new client_dynamodb_1.PutItemCommand(params));
            response = {
                message: 'Successfully created user.',
                createResult,
            };
        }
        catch (e) {
            console.error(e);
            throw new common_1.InternalServerErrorException('Failed to register user');
        }
        return response;
    }
    async getAllUsers() {
        try {
            const { Items } = await db_1.default.send(new client_dynamodb_1.ScanCommand({ TableName: process.env.DYNAMODB_TABLE_NAME }));
            const response = {
                message: 'Successfully retrieved all users.',
                data: Items.map((item) => (0, util_dynamodb_1.unmarshall)(item)),
            };
            return response;
        }
        catch (e) {
            console.error(e);
            throw new common_1.InternalServerErrorException('Failed to retrieve users');
        }
    }
    async getUserById(id) {
        try {
            const params = {
                TableName: process.env.DYNAMODB_TABLE_NAME,
                Key: (0, util_dynamodb_1.marshall)({
                    userId: id,
                }),
            };
            const { Item } = await db_1.default.send(new client_dynamodb_1.GetItemCommand(params));
            const response = {
                message: 'Successfully retrieved user.',
                data: (0, util_dynamodb_1.unmarshall)(Item),
            };
            return response;
        }
        catch (e) {
            console.error(e);
            throw new common_1.InternalServerErrorException('Failed to retrieve user');
        }
    }
    async deleteUser(id) {
        try {
            const params = {
                TableName: process.env.DYNAMODB_TABLE_NAME,
                Key: (0, util_dynamodb_1.marshall)({
                    userId: id,
                }),
            };
            const deleteResult = await db_1.default.send(new client_dynamodb_1.DeleteItemCommand(params));
            const response = {
                message: 'Successfully deleted user.',
                deleteResult,
            };
            return response;
        }
        catch (e) {
            console.error(e);
            throw new common_1.InternalServerErrorException('Failed to delete user');
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map