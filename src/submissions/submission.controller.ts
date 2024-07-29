import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SubmissionService } from './submission.service';
import { CreateSubmissionDto } from './dto/createSubmission.dto';

@ApiTags('submissions')
@Controller('submissions')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Post('/')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Create a new moment!' })
  async createMoment(@Body() dto: CreateSubmissionDto) {
    return await this.submissionService.triggerSubmissionEmail(dto);
  }
}
