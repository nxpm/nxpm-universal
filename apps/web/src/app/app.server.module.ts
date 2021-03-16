import { NgModule } from '@angular/core'
import { ServerModule } from '@angular/platform-server'
import { CookieBackendModule } from 'ngx-cookie-backend'
import { AppModule } from './app.module'
import { AppComponent } from './app.component'

@NgModule({
  imports: [AppModule, ServerModule, CookieBackendModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
