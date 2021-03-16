import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebCoreFeatureModule } from '@nxpm-universal/web/core/feature'
import { WebShellFeatureModule } from '@nxpm-universal/web/shell/feature'
import { CookieModule } from 'ngx-cookie'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    CookieModule.forRoot(),
    RouterModule,
    WebCoreFeatureModule,
    WebShellFeatureModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
