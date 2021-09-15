import { Injectable, NotFoundException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { CreateUserDto } from 'src/users/user.dto'
import { UserWithoutSensitiveData } from 'src/users/user.type'
import { UsersService } from 'src/users/users.service'
import { LoginDto } from './auth.dto'
import { JwtPayload } from './auth.type'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(
    loginDto: LoginDto,
  ): Promise<{ user: UserWithoutSensitiveData; token: string }> {
    const user = await this.usersService.validateUser(
      loginDto.email,
      loginDto.password,
    )
    if (!user) {
      throw new NotFoundException('User not found')
    }
    const jwtPayload: JwtPayload = { id: user.id, email: user.email }
    const token = this.jwtService.sign(jwtPayload)
    return { user, token }
  }

  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<{ user: UserWithoutSensitiveData; token: string }> {
    const user = await this.usersService.createUser(createUserDto)
    const jwtPayload: JwtPayload = { id: user.id, email: user.email }
    const token = this.jwtService.sign(jwtPayload)
    return { user, token }
  }

  async validatePayload(
    payload: JwtPayload,
  ): Promise<UserWithoutSensitiveData> {
    const user = await this.usersService.findOneByUserId(payload.id)
    if (!user) {
      throw new NotFoundException('User not found')
    }
    return user
  }
}
