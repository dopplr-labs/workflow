import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { UserWithoutSensitiveData } from 'src/users/user.dto'
import { AuthService } from './auth.service'
import { JwtPayload } from './auth.type'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    })
  }

  validate(payload: JwtPayload): Promise<UserWithoutSensitiveData> {
    return this.authService.validatePayload(payload)
  }
}
