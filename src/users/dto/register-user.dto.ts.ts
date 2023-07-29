/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RegisterUserDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    DOB: string;

    @ApiProperty()
    @IsNotEmpty()
    userId: string;

    @ApiProperty()
    @IsNotEmpty()
    role: string;

    @ApiProperty()
    @IsNotEmpty()
    propertyId: string;

    @ApiProperty()
    @IsNotEmpty()
    location: string;
    
}
