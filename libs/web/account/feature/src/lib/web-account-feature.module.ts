import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiSidebarPageModule } from '@nxpm-universal/web/ui/sidebar-page'
import { WebAccountFeatureComponent } from './web-account-feature.component'

@NgModule({
  declarations: [WebAccountFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WebAccountFeatureComponent,
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
    WebUiSidebarPageModule,
  ],
})
export class WebAccountFeatureModule {}
