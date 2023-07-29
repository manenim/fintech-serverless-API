import { UserRolesService } from './user-roles.service';
export declare class UserRolesController {
    private readonly userRolesService;
    constructor(userRolesService: UserRolesService);
    getRenters(): Promise<{
        message: string;
        data: Record<string, any>[];
    }>;
    getBuyers(): Promise<{
        message: string;
        data: Record<string, any>[];
    }>;
}
