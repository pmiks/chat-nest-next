import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { from, Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (!request.headers.authorization) {
      return false;
    }
    request.user = await this.validateToken(request.headers.authorization);
    return true;
  }

  async validateToken(auth: string) {
    const [bearer, token] = auth.split(' ');
    if (bearer !== 'Bearer') {
      throw new HttpException('Invalid token', HttpStatus.FORBIDDEN);
    }
    try {
      const decodedToken = await jwt.verify(token, process.env.SECRET);
      return decodedToken;
    } catch (err) {
      throw new HttpException(
        'Token error ' + (err.message || err.name),
        HttpStatus.FORBIDDEN,
      );
    }
  }
}
