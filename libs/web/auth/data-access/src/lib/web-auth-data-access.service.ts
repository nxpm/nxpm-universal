import { Injectable } from '@angular/core'
import { WebCoreDataAccessService, LoginInput, RegisterInput } from '@nxpm-universal/web/core/data-access'

@Injectable()
export class WebAuthDataAccessService {
  constructor(public readonly data: WebCoreDataAccessService) {}

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
