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
exports.UserRolesService = void 0;
const common_1 = require("@nestjs/common");
const util_dynamodb_1 = require("@aws-sdk/util-dynamodb");
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const db_1 = __importDefault(require("../utils/db"));
let UserRolesService = class UserRolesService {
    async getRenters() {
        console.log('entered!!!');
        try {
            console.log('entered again!!!');
            const params = {
                TableName: process.env.DYNAMODB_TABLE_NAME,
                IndexName: 'role-index',
                KeyConditionExpression: '#role = :role',
                ExpressionAttributeNames: {
                    '#role': 'role',
                },
                ExpressionAttributeValues: (0, util_dynamodb_1.marshall)({
                    ':role': 'renter',
                }),
            };
            const command = new client_dynamodb_1.QueryCommand(params);
            const { Items } = await db_1.default.send(command);
            const response = {
                message: 'Successfully retrieved all renters.',
                data: Items.map((item) => (0, util_dynamodb_1.unmarshall)(item)),
            };
            return response;
        }
        catch (e) {
            console.error(e);
            throw new common_1.InternalServerErrorException('Failed to retrieve renters');
        }
    }
    async getBuyers() {
        try {
            const params = {
                TableName: process.env.DYNAMODB_TABLE_NAME,
                IndexName: 'role-index',
                KeyConditionExpression: '#role = :role',
                ExpressionAttributeNames: {
                    '#role': 'role',
                },
                ExpressionAttributeValues: (0, util_dynamodb_1.marshall)({
                    ':role': 'buyer',
                }),
            };
            const command = new client_dynamodb_1.QueryCommand(params);
            const { Items } = await db_1.default.send(command);
            const response = {
                message: 'Successfully retrieved all buyers.',
                data: Items.map((item) => (0, util_dynamodb_1.unmarshall)(item)),
            };
            return response;
        }
        catch (e) {
            console.error(e);
            throw new common_1.InternalServerErrorException('Failed to retrieve buyers');
        }
    }
};
UserRolesService = __decorate([
    (0, common_1.Injectable)()
], UserRolesService);
exports.UserRolesService = UserRolesService;
//# sourceMappingURL=user-roles.service.js.map