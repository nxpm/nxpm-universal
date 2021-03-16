import { Module } from '@nestjs/common'

import { ApiAuthUtilController } from './api-auth-util.controller'
import { ApiAuthUtilResolver } from './api-auth-util.resolver'
import { ApiAuthUtilService } from './api-auth-util.service'

@Module({
  controllers: [ApiAuthUtilController],
  exports: [],
  imports: [],
  providers: [ApiAuthUtilResolver, ApiAuthUtilService],
})
export class ApiAuthUtilModule {}
