import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { QuizService } from './quiz.service';

@Controller()
export class QuizController {
  constructor(private quizService: QuizService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/api/questions/:quizId')
  login(@Param() quizId: number) {
    return this.quizService.findOne({ where: { id: quizId } });
  }
}
