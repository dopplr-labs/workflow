import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator'
import { UserWithoutSensitiveData } from 'src/users/user.dto'

export class LoginDto {
  @IsEmail()
  email: string

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string
}

export class LoginResponseDto {
  user: UserWithoutSensitiveData

  token: string
}
