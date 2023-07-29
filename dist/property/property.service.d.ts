import { matchUserDto } from './dto/match-users.dto';
export declare class PropertyService {
    matchUsers(id: matchUserDto): Promise<{
        message: string;
        data: Record<string, any>[];
    }>;
}
