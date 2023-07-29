import { PropertyService } from './property.service';
import { matchUserDto } from './dto/match-users.dto';
export declare class PropertyController {
    private readonly propertyService;
    constructor(propertyService: PropertyService);
    matchUser(id: matchUserDto): Promise<{
        message: string;
        data: Record<string, any>[];
    }>;
}
