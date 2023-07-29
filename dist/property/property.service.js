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
exports.PropertyService = void 0;
const common_1 = require("@nestjs/common");
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const util_dynamodb_1 = require("@aws-sdk/util-dynamodb");
const db_1 = __importDefault(require("../utils/db"));
let PropertyService = class PropertyService {
    async matchUsers(id) {
        try {
            const params = {
                TableName: process.env.DYNAMODB_TABLE_NAME,
                IndexName: 'propertyId-index',
                KeyConditionExpression: '#propertyId = :propertyId',
                ExpressionAttributeNames: {
                    '#propertyId': 'propertyId',
                },
                ExpressionAttributeValues: (0, util_dynamodb_1.marshall)({
                    ':propertyId': id,
                }),
            };
            const command = new client_dynamodb_1.QueryCommand(params);
            const { Items } = await db_1.default.send(command);
            const response = {
                message: 'Successfully matched a buyer and renter interested in the same property.',
                data: Items.map((item) => (0, util_dynamodb_1.unmarshall)(item)),
            };
            return response;
        }
        catch (e) {
            console.error(e);
            throw new common_1.InternalServerErrorException('Failed to match users');
        }
    }
};
PropertyService = __decorate([
    (0, common_1.Injectable)()
], PropertyService);
exports.PropertyService = PropertyService;
//# sourceMappingURL=property.service.js.map