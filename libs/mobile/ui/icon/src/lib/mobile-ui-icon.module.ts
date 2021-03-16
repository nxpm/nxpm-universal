import { NgModule } from '@angular/core'
import { SvgIconRegistry, SvgIconsModule } from '@ngneat/svg-icon'
import { uiIconMap } from './constants/ui-icon.map'
import { MobileUiIconComponent } from './mobile-ui-icon.component'

@NgModule({
  imports: [SvgIconsModule.forRoot()],
  declarations: [MobileUiIconComponent],
  exports: [MobileUiIconComponent],
})
export class MobileUiIconModule {
  constructor(readonly registry: SvgIconRegistry) {
    uiIconMap.forEach((data, name) => this.registry.register({ name, data }))
  }
}
