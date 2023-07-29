import { Injectable, InternalServerErrorException } from '@nestjs/common';
import db from '../utils/db';
import {
  GetItemCommand,
  PutItemCommand,
  DeleteItemCommand,
  ScanCommand,
  PutItemCommandOutput,
} from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { RegisterUserDto } from './dto/register-user.dto.ts';
import { getUserByIdDto } from './dto/get-user-by-id.dto';

@Injectable()
export class UsersService {
  async register(registerUserDto: RegisterUserDto) {
    let response:
      | { message: string; createResult: PutItemCommandOutput }
      | { message: string; statusCode: number };
    try {
      console.log('entered');
      const params = {
        TableName: process.env.DYNAMODB_TABLE_NAME,
        Item: marshall(registerUserDto || {}),
      };
      const createResult = await db.send(new PutItemCommand(params));

      response = {
        message: 'Successfully created user.',
        createResult,
      };
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException('Failed to register user');
    }
    return response;
  }

  async getAllUsers() {
    try {
      const { Items } = await db.send(
        new ScanCommand({ TableName: process.env.DYNAMODB_TABLE_NAME }),
      );

      const response = {
        message: 'Successfully retrieved all users.',
        data: Items.map((item) => unmarshall(item)),
      };

      return response;
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException('Failed to retrieve users');
    }
  }

  async getUserById(id: getUserByIdDto) {
    try {
      const params = {
        TableName: process.env.DYNAMODB_TABLE_NAME,
        Key: marshall({
          userId: id,
        }),
      };
      const { Item } = await db.send(new GetItemCommand(params));

      const response = {
        message: 'Successfully retrieved user.',
        data: unmarshall(Item),
      };

      return response;
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException('Failed to retrieve user');
    }
  }

  async deleteUser(id: getUserByIdDto) {
    try {
      const params = {
        TableName: process.env.DYNAMODB_TABLE_NAME,
        Key: marshall({
          userId: id,
        }),
      };
      const deleteResult = await db.send(new DeleteItemCommand(params));

      const response = {
        message: 'Successfully deleted user.',
        deleteResult,
      };
      return response;
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException('Failed to delete user');
    }
  }
}
