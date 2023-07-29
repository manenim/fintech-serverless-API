import { ApiResponse, ApiParam, ApiOperation } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';
import { PropertyService } from './property.service';
import { matchUserDto } from './dto/match-users.dto';
import { RegisterUserDto } from 'src/users/dto/register-user.dto.ts';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get(':id')
  @ApiOperation({
    summary: 'Endpoint for matching renters and buyers',
    description:
      'You can get a registered renter and buyer interested in the same property by providing the propertyId. You can test this endpoint with propertyId 103.',
  })
  @ApiParam({ name: 'id', description: 'The ID of the user', type: String })
  @ApiResponse({
    status: 200,
    description: 'Get a User',
    type: [RegisterUserDto],
  })
  matchUser(@Param('id') id: matchUserDto) {
    return this.propertyService.matchUsers(id);
  }
}
