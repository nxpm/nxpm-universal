import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import {
  AccountUiEmailFormModule,
  AccountUiEmailListModule,
  AccountUiEmailPrimaryFormModule,
} from '@nxpm-universal/mobile/account/ui'
import { MobileUiLoaderModule } from '@nxpm-universal/mobile/ui/loader'
import { AccountEmailComponent } from './account-email.component'

@NgModule({
  declarations: [AccountEmailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountEmailComponent,
      },
    ]),
    AccountUiEmailListModule,
    AccountUiEmailPrimaryFormModule,
    AccountUiEmailFormModule,
    MobileUiLoaderModule,
  ],
})
export class AccountEmailModule {}
