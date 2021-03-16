import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { HotToastModule } from '@ngneat/hot-toast'
import { SvgIconsModule } from '@ngneat/svg-icon'

import { MobileCoreFeatureGraphQLModule } from './mobile-core-feature-graphql.module'

@NgModule({
  imports: [HttpClientModule, MobileCoreFeatureGraphQLModule, HotToastModule.forRoot(), SvgIconsModule.forRoot()],
})
export class MobileCoreFeatureModule {}
