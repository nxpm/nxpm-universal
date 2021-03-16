import { NgModule } from '@angular/core'
import { SvgIconRegistry, SvgIconsModule } from '@ngneat/svg-icon'
import { uiIconMap } from './constants/ui-icon.map'
import { WebUiIconComponent } from './web-ui-icon.component'

@NgModule({
  imports: [SvgIconsModule.forRoot()],
  declarations: [WebUiIconComponent],
  exports: [WebUiIconComponent],
})
export class WebUiIconModule {
  constructor(readonly registry: SvgIconRegistry) {
    uiIconMap.forEach((data, name) => this.registry.register({ name, data }))
  }
}
