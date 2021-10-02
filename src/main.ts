import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // To set a prefix for every route registered in an HTTP application
  app.setGlobalPrefix('api/v1');

  // バリデーション時にエラーを返却するための Pipe
  app.useGlobalPipes(new ValidationPipe());

  // CORS を許可
  app.enableCors({
    origin: '*',
    methods: '*',
    allowedHeaders:
      'Origin,Content-Type,Accept,Authorization,X-Requested-With,X-Amz-Date,X-Api-Key',
  });

  // OpenAPI(Swagger) を設定
  const options = new DocumentBuilder()
    .setTitle('nestjs-sample')
    .setDescription('description')
    .setVersion('v1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/v1/swagger', app, document, {
    customSiteTitle: 'Nestjs Sample',
  });

  await app.listen(3000);
}
bootstrap();
