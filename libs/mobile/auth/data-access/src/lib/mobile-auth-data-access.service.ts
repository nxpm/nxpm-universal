import { Injectable } from '@angular/core'
import { MobileCoreDataAccessService, LoginInput, RegisterInput } from '@nxpm-universal/mobile/core/data-access'

@Injectable()
export class MobileAuthDataAccessService {
  constructor(public readonly data: MobileCoreDataAccessService) {}

  me() {
    return this.data.me()
  }

  login(input: LoginInput) {
    return this.data.login({ input })
  }

  logout() {
    return this.data.logout()
  }

  register(input: RegisterInput) {
    return this.data.register({ input })
  }
}
