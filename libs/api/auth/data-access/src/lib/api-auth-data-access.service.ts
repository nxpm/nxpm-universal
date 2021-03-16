import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { ApiCoreDataAccessService } from '@nxpm-universal/api/core/data-access'
import { ApiCoreUtilService, validatePassword } from '@nxpm-universal/api/core/util'
import { Response } from 'express'
import { LoginInput } from './dto/login.input'
import { RegisterInput } from './dto/register.input'
import { AuthToken } from './models/auth-token.model'

@Injectable()
export class ApiAuthDataAccessService {
  constructor(
    private readonly data: ApiCoreDataAccessService,
    private readonly core: ApiCoreUtilService,
    private readonly jwtService: JwtService,
  ) {}

  async register(payload: RegisterInput) {
    const user = await this.data.createUser(payload, { email: payload.email })

    return this.signUser(user)
  }

  async login(input: LoginInput) {
    const email = input.email.trim()
    const password = input.password.trim()
    const user = await this.data.findUserByEmail(email)

    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`)
    }

    if (!user?.password) {
      throw new NotFoundException(`Can't log in with email: ${email}`)
    }

    const passwordValid = await validatePassword(password, user.password)

    if (!passwordValid) {
      throw new BadRequestException('Invalid password')
    }

    return this.signUser(user)
  }

  signUser(user): AuthToken {
    const token = this.jwtService.sign({ userId: user?.id })
    return { token }
  }

  validateUser(userId: string) {
    return this.data.findUserById(userId)
  }

  getUserFromToken(token: string) {
    const userId = this.jwtService.decode(token)['userId']

    return this.data.findUserById(userId)
  }

  setCookie(res: Response, token: string) {
    return res?.cookie(this.core.cookie.name, token, this.core.cookie.options)
  }

  clearCookie(res: Response) {
    return res.clearCookie(this.core.cookie.name, this.core.cookie.options)
  }
}
