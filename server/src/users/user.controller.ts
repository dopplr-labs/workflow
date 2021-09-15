import { Controller, Get, UseGuards } from '@nestjs/common'
import { JwtGuard } from 'src/auth/jwt.guard'
import { UsersService } from './users.service'
import { User } from './user.decorator'
import { UserWithoutSensitiveData } from './user.type'

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get('me')
  async findCurrentUser(@User() user): Promise<UserWithoutSensitiveData> {
    return user
  }

  @Get()
  findAll(): Promise<UserWithoutSensitiveData[]> {
    return this.userService.findAll()
  }
}
