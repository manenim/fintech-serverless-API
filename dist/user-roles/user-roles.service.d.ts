export declare class UserRolesService {
    getRenters(): Promise<{
        message: string;
        data: Record<string, any>[];
    }>;
    getBuyers(): Promise<{
        message: string;
        data: Record<string, any>[];
    }>;
}
