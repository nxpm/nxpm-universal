import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IsAdminGuard, IsLoggedInGuard, WebAuthDataAccessModule } from '@nxpm-universal/web/auth/data-access'
import { WebLayoutComponent } from '@nxpm-universal/web/layout'

const routes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    canActivate: [IsLoggedInGuard],
    children: [
      // Application routes here
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'about',
        loadChildren: () => import('@nxpm-universal/web/about/feature').then((m) => m.WebAboutFeatureModule),
      },
      {
        path: 'account',
        loadChildren: () => import('@nxpm-universal/web/account/feature').then((m) => m.WebAccountFeatureModule),
      },
      {
        path: 'admin',
        canActivate: [IsAdminGuard],
        loadChildren: () => import('@nxpm-universal/web/admin/feature').then((m) => m.WebAdminFeatureModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('@nxpm-universal/web/dashboard/feature').then((m) => m.WebDashboardFeatureModule),
      },
      {
        path: 'not-found',
        loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule),
      },
    ],
  },
  {
    path: '',
    loadChildren: () => import('@nxpm-universal/web/auth/feature').then((m) => m.WebAuthFeatureModule),
  },
  { path: '**', redirectTo: '/not-found' },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always', initialNavigation: 'enabled' }),
    WebAuthDataAccessModule,
  ],
})
export class WebShellFeatureModule {}
