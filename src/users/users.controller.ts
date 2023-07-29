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

  @Get('/send/insertData')
  async insertData() {
    const dataToInsert = [
      {
        location: 'Los Angeles',
        propertyId: '140',
        role: 'buyer',
        userId: '1011',
        DOB: '09/18/1983',
        name: 'Robert Johnson',
      },
      {
        location: 'Houston',
        propertyId: '150',
        role: 'buyer',
        userId: '1012',
        DOB: '02/25/1978',
        name: 'Jennifer Lee',
      },
      {
        location: 'Austin',
        propertyId: '155',
        role: 'buyer',
        userId: '1013',
        DOB: '07/05/1990',
        name: 'David Brown',
      },
      {
        location: 'Dallas',
        propertyId: '160',
        role: 'renter',
        userId: '1014',
        DOB: '11/10/1987',
        name: 'Jessica Martinez',
      },
      {
        location: 'San Francisco',
        propertyId: '165',
        role: 'renter',
        userId: '1015',
        DOB: '03/14/1982',
        name: 'Matthew Wilson',
      },
      {
        location: 'Los Angeles',
        propertyId: '170',
        role: 'buyer',
        userId: '1016',
        DOB: '06/30/1991',
        name: 'Emily Davis',
      },
      {
        location: 'Austin',
        propertyId: '175',
        role: 'renter',
        userId: '1017',
        DOB: '12/08/1986',
        name: 'Michael Anderson',
      },
      {
        location: 'Houston',
        propertyId: '180',
        role: 'renter',
        userId: '1018',
        DOB: '04/22/1989',
        name: 'Sophia Johnson',
      },
      {
        location: 'San Francisco',
        propertyId: '185',
        role: 'buyer',
        userId: '1019',
        DOB: '08/09/1976',
        name: 'Ethan Martinez',
      },
      {
        location: 'Dallas',
        propertyId: '190',
        role: 'buyer',
        userId: '1020',
        DOB: '01/17/1995',
        name: 'Isabella Brown',
      },
    ];
    return this.usersService.batchInsertData(dataToInsert);
    // const result = await this.myDynamoDBService.batchInsertData(dataToInsert);
    // return { message: 'Data inserted successfully!', result };
  }
}
