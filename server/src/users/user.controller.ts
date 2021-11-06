import { Controller, Get, UseGuards } from '@nestjs/common'
import { ApiResponse, ApiBearerAuth } from '@nestjs/swagger'
import { JwtGuard } from 'src/auth/jwt.guard'
import { UsersService } from './users.service'
import { User } from './user.decorator'
import { UserWithoutSensitiveData } from './user.dto'

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @ApiBearerAuth()
  @Get('me')
  @ApiResponse({
    status: 200,
    type: UserWithoutSensitiveData,
    description: 'Me endpoint to validate auth token',
  })
  async findCurrentUser(@User() user): Promise<UserWithoutSensitiveData> {
    return user
  }

  @Get()
  findAll(): Promise<UserWithoutSensitiveData[]> {
    return this.userService.findAll()
  }
}
