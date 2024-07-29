import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { EmailService } from '../email/email.service';
import { CreateSubmissionDto } from './dto/createSubmission.dto';

@Injectable()
export class SubmissionService {
  constructor(private email: EmailService) {}
  private readonly logger = new Logger(SubmissionService.name);

  async triggerSubmissionEmail(data: CreateSubmissionDto) {
    try {
      const emailBody = `
      <h1>New Submission from ${data.name}</h1>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
      <p><strong>Service Requested:</strong> ${data.service}</p>
      <p><strong>Message:</strong> ${data.message}</p>
      `;

      await this.email.sendMail(process.env.EMAIL_RECIPIENT, 'New Alma Labs Submission', emailBody);
      return { message: 'Submission successful' };
    } catch (error) {
      this.logger.error(`Issue creating moment: ${error.message}`);
      throw new BadRequestException(`Issue creating moment: ${error.message}`);
    }
  }
}
