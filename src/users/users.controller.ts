import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterUserDto } from './dto/register-user.dto.ts';
import { getUserByIdDto } from './dto/get-user-by-id.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

// @ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  @ApiOperation({ summary: 'Create a user', description: 'Create a new user.' })
  @ApiBody({ type: RegisterUserDto })
  @ApiResponse({
    status: 201,
    description: 'The created user',
    type: RegisterUserDto,
  })
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.usersService.register(registerUserDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all users',
    description: 'Retrieve a list of all users.',
  })
  @ApiResponse({
    status: 200,
    description: 'List of users',
    type: [RegisterUserDto],
  })
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get user by id',
    description: 'Retrieves a user by the UserId.',
  })
  @ApiParam({ name: 'id', description: 'The ID of the user', type: String })
  @ApiResponse({
    status: 200,
    description: 'Get a User',
    type: [RegisterUserDto],
  })
  getUserById(@Param('id') id: getUserByIdDto) {
    return this.usersService.getUserById(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a user',
    description: 'Delete a user from the DB.',
  })
  @ApiParam({ name: 'id', description: 'The ID of the user', type: String })
  @ApiResponse({
    status: 201,
    description: 'Deleted the user',
    type: RegisterUserDto,
  })
  deleteUser(@Param('id') id: getUserByIdDto) {
    return this.usersService.deleteUser(id);
  }
}
