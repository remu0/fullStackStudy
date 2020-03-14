import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from '@app/common';
import { CoursesController } from './courses/courses.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    CommonModule,
    AuthModule,
  ],
  controllers: [AppController, CoursesController],
  providers: [AppService],
})
export class AppModule {}
