import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // SWAGGER API DOCUMENTATION
  const config = new DocumentBuilder()
    .setTitle('Email API for Alma')
    .setDescription('API for Alma Labs.')
    .setVersion('0.1')
    .addTag('submissions', 'Collection of endpoints for handling submissions')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: { persistAuthorization: true },
  });

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true}));

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
