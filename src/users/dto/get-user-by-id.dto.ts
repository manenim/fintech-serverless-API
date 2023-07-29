/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class getUserByIdDto {
    @ApiProperty()
  id: string;
}
