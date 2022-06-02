import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { shuffleArray } from '../../utils';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>,
  ) {}

  async findOne(_options: FindOneOptions<Quiz>): Promise<Quiz[]> {
    try {
      const quiz = await this.quizRepository.find();
      return shuffleArray<Quiz>(quiz);
    } catch (error) {
      throw new BadRequestException('Não foi possível buscar quiz');
    }
  }
}
