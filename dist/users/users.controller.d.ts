import { UsersService } from './users.service';
import { RegisterUserDto } from './dto/register-user.dto.ts';
import { getUserByIdDto } from './dto/get-user-by-id.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    register(registerUserDto: RegisterUserDto): Promise<{
        message: string;
        createResult: import("@aws-sdk/client-dynamodb").PutItemCommandOutput;
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
