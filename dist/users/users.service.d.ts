import { PutItemCommandOutput } from '@aws-sdk/client-dynamodb';
import { RegisterUserDto } from './dto/register-user.dto.ts';
import { getUserByIdDto } from './dto/get-user-by-id.dto';
export declare class UsersService {
    register(registerUserDto: RegisterUserDto): Promise<{
        message: string;
        createResult: PutItemCommandOutput;
    }>;
    getAllUsers(): Promise<{
        message: string;
        data: Record<string, any>[];
    }>;
    getUserById(id: getUserByIdDto): Promise<{
        message: string;
        data: Record<string, any>;
    }>;
    deleteUser(id: getUserByIdDto): Promise<{
        message: string;
        deleteResult: import("@aws-sdk/client-dynamodb").DeleteItemCommandOutput;
    }>;
}
