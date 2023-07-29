/* eslint-disable prettier/prettier */
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

const db = new DynamoDBClient({});

export default db;
