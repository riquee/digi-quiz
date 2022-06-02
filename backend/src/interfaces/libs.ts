import { Request as Req } from 'express';
import { User } from '../modules/user/user.entity';

export interface Request extends Req {
  user: User;
}
