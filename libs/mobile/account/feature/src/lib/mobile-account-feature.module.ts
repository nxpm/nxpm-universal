import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { MobileUiSidebarPageModule } from '@nxpm-universal/mobile/ui/sidebar-page'
import { MobileAccountFeatureComponent } from './mobile-account-feature.component'

@NgModule({
  declarations: [MobileAccountFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MobileAccountFeatureComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'profile' },
          {
            path: 'email',
            loadChildren: () => import('./account-email/account-email.module').then((m) => m.AccountEmailModule),
          },
          {
            path: 'password',
            loadChildren: () =>
              import('./account-password/account-password.module').then((m) => m.AccountPasswordModule),
          },
          {
            path: 'profile',
            loadChildren: () => import('./account-profile/account-profile.module').then((m) => m.AccountProfileModule),
          },
        ],
      },
    ]),
    MobileUiSidebarPageModule,
  ],
})
export class MobileAccountFeatureModule {}
