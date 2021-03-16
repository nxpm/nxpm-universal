import { ApiAuthDataAccessService, LoginInput, RegisterInput, AuthToken } from '@nxpm-universal/api/auth/data-access'
import { CtxUser, GqlAuthGuard } from '@nxpm-universal/api/auth/util'
import { User } from '@nxpm-universal/api/user/data-access'
import { Context, Query, Resolver, Mutation, Args } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'

@Resolver()
export class ApiAuthFeatureResolver {
  constructor(private readonly service: ApiAuthDataAccessService) {}

  @Query(() => User, { nullable: true })
  @UseGuards(GqlAuthGuard)
  async me(@CtxUser() user: User) {
    return user
  }

  @Mutation(() => AuthToken, { nullable: true })
  async login(@Context() context, @Args('input') input: LoginInput) {
    const authToken = await this.service.login(input)
    this.service.setCookie(context.res, authToken.token)
    return authToken
  }

  @Mutation(() => Boolean, { nullable: true })
  async logout(@Context() context) {
    this.service.clearCookie(context.res)
    return true
  }

  @Mutation(() => AuthToken, { nullable: true })
  async register(@Context() context, @Args('input') input: RegisterInput) {
    const authToken = await this.service.register(input)
    this.service.setCookie(context.res, authToken.token)
    return authToken
  }
}
