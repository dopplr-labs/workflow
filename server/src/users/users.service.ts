import { Injectable, NotFoundException } from '@nestjs/common'
import { User } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'src/prisma.service'
import { CreateUserDto } from './user.dto'
import { UserWithoutSensitiveData } from './user.type'

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  sanitizeUser(user: User): UserWithoutSensitiveData {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, salt, ...rest } = user
    return rest
  }

  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<UserWithoutSensitiveData> {
    const { email, password, name } = createUserDto
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = await this.prismaService.user.create({
      data: { name, email, password: hashedPassword, salt },
    })
    return this.sanitizeUser(user)
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserWithoutSensitiveData> {
    const user = await this.prismaService.user.findUnique({ where: { email } })
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`)
    }
    const { password: userPassword, salt } = user
    const hashedPassword = await bcrypt.hash(password, salt)
    if (userPassword !== hashedPassword) {
      throw new NotFoundException('Incorrect password. Please try again')
    }
    return this.sanitizeUser(user)
  }

  async findAll(): Promise<UserWithoutSensitiveData[]> {
    const allUsers = await this.prismaService.user.findMany()
    return allUsers.map(this.sanitizeUser)
  }

  async findOneByUserId(userId: string): Promise<UserWithoutSensitiveData> {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    })
    return this.sanitizeUser(user)
  }
}
