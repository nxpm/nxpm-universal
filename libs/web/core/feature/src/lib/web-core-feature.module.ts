import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { SvgIconsModule } from '@ngneat/svg-icon'

import { WebCoreFeatureGraphQLModule } from './web-core-feature-graphql.module'

@NgModule({
  imports: [HttpClientModule, WebCoreFeatureGraphQLModule, SvgIconsModule.forRoot()],
})
export class WebCoreFeatureModule {}
