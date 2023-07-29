import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { UserRolesService } from './user-roles.service';
import { RegisterUserDto } from 'src/users/dto/register-user.dto.ts';

@Controller('role')
export class UserRolesController {
  constructor(private readonly userRolesService: UserRolesService) {}

  @Get('renters')
  @ApiOperation({
    summary: 'Get all renters',
    description: 'Retrieve a list of all renters.',
  })
  @ApiResponse({
    status: 200,
    description: 'List of users',
    type: [RegisterUserDto],
  })
  getRenters() {
    return this.userRolesService.getRenters();
  }

  @Get('buyers')
  @ApiOperation({
    summary: 'Get all buyers',
    description: 'Retrieve a list of all buyers.',
  })
  @ApiResponse({
    status: 200,
    description: 'List of buyers',
    type: [RegisterUserDto],
  })
  getBuyers() {
    return this.userRolesService.getBuyers();
  }
}
