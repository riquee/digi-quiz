import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(options: FindOneOptions<User>) {
    try {
      return this.usersRepository.findOne(options);
    } catch (error) {
      throw new BadRequestException('Não foi possível buscar usuário');
    }
  }
}
