import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSubmissionDto {
  @ApiProperty({
    example: 'John Smith',
    description: 'The name of the person submitting the form',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Amce Inc',
    description: 'The company of the person submitting the form',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  company: string;

  @ApiProperty({
    example: 'johnsmoth@gmail.com',
    description: 'The email of the person submitting the form',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'Web Dev',
    description: 'The name of the service theyre interested in ',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  service: string;

  @ApiProperty({
    example: 'Blah blah blah',
    description: 'Message from the person submitting the form',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  message: string;
}
