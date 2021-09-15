import { Body, Controller, Post } from '@nestjs/common'
import { UserWithoutSensitiveData } from 'src/users/user.type'
import { CreateUserDto } from 'src/users/user.dto'
import { AuthService } from './auth.service'
import { LoginDto } from './auth.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(
    @Body() loginDto: LoginDto,
  ): Promise<{ token: string; user: UserWithoutSensitiveData }> {
    return this.authService.login(loginDto)
  }

  @Post('signup')
  createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<{ token: string; user: UserWithoutSensitiveData }> {
    return this.authService.createUser(createUserDto)
  }
}
