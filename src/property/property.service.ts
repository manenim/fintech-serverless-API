import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { QueryCommand } from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import db from 'src/utils/db';
import { matchUserDto } from './dto/match-users.dto';

@Injectable()
export class PropertyService {
  async matchUsers(id: matchUserDto) {
    // console.log(typeof id);
    try {
      const params = {
        TableName: process.env.DYNAMODB_TABLE_NAME,
        IndexName: 'propertyId-index',
        KeyConditionExpression: '#propertyId = :propertyId',
        ExpressionAttributeNames: {
          '#propertyId': 'propertyId',
        },
        ExpressionAttributeValues: marshall({
          ':propertyId': id,
        }),
      };
      const command = new QueryCommand(params);

      const { Items } = await db.send(command);

      const response = {
        message:
          'Successfully matched a buyer and renter interested in the same property.',
        data: Items.map((item) => unmarshall(item)),
      };
      return response;
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException('Failed to match users');
    }
  }
}
