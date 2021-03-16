import { Injectable } from '@nestjs/common'

@Injectable()
export class ApiCoreFeatureService {
  uptime(): number {
    return process.uptime()
  }
}
