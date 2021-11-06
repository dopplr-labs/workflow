import { Body, Controller, Post } from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'
import { CreateUserDto, UserWithoutSensitiveData } from 'src/users/user.dto'
import { AuthService } from './auth.service'
import { LoginDto, LoginResponseDto } from './auth.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiResponse({
    status: 201,
    type: LoginResponseDto,
    description: 'Returns user object and auth token',
  })
  login(
    @Body() loginDto: LoginDto,
  ): Promise<{ token: string; user: UserWithoutSensitiveData }> {
    return this.authService.login(loginDto)
  }

  @Post('signup')
  @ApiResponse({
    status: 201,
    type: LoginResponseDto,
    description:
      'Creates a new user in DB and returns user object and auth token',
  })
  createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<{ token: string; user: UserWithoutSensitiveData }> {
    return this.authService.createUser(createUserDto)
  }
}
