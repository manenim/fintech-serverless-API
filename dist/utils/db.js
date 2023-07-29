"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const db = new client_dynamodb_1.DynamoDBClient({ region: 'us-east-1' });
exports.default = db;
//# sourceMappingURL=db.js.map