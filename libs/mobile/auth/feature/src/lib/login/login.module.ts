import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { MobileAuthDataAccessModule } from '@nxpm-universal/mobile/auth/data-access'
import { MobileUiFormModule } from '@nxpm-universal/mobile/ui/form'
import { AuthPageModule } from '@nxpm-universal/mobile/auth/ui'
import { LoginComponent } from './login.component'

const routes: Routes = [{ path: '', component: LoginComponent }]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MobileUiFormModule,
    AuthPageModule,
    MobileAuthDataAccessModule,
  ],
})
export class LoginModule {}
