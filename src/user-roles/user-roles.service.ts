import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { QueryCommand } from '@aws-sdk/client-dynamodb';
import db from 'src/utils/db';

@Injectable()
export class UserRolesService {
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
        ExpressionAttributeValues: marshall({
          ':role': 'renter',
        }),
      };
      const command = new QueryCommand(params);

      const { Items } = await db.send(command);

      const response = {
        message: 'Successfully retrieved all renters.',
        data: Items.map((item) => unmarshall(item)),
      };

      return response;
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException('Failed to retrieve renters');
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
        ExpressionAttributeValues: marshall({
          ':role': 'buyer',
        }),
      };
      const command = new QueryCommand(params);

      const { Items } = await db.send(command);

      const response = {
        message: 'Successfully retrieved all buyers.',
        data: Items.map((item) => unmarshall(item)),
      };

      return response;
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException('Failed to retrieve buyers');
    }
  }
}
