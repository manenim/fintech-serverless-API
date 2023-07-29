"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const db = new client_dynamodb_1.DynamoDBClient({});
exports.default = db;
//# sourceMappingURL=db.js.map