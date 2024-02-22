import { Injectable, PipeTransform } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashPasswordPipe implements PipeTransform {
  async transform(password: string) {
    const salt = process.env.SALT_PASSWORD;

    const passwordHash = await bcrypt.hash(password, salt);

    return passwordHash;
  }
}
