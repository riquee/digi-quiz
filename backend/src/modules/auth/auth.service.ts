import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService, private jwtService: JwtService) {}

  async login(user: User): Promise<{ token: string }> {
    const { password, ...payload } = user;
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.usersService.findOne({ where: { username } });

    if (!user) throw new UnauthorizedException('Usuário inválido');

    const { password, ...result } = user;

    if (password !== pass) throw new UnauthorizedException('Senha incorreta');

    return result;
  }
}
