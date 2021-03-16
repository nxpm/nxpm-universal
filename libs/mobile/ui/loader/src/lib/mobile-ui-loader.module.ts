import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MobileUiLoaderComponent } from './mobile-ui-loader.component'

@NgModule({
  declarations: [MobileUiLoaderComponent],
  exports: [MobileUiLoaderComponent],
  imports: [CommonModule],
})
export class MobileUiLoaderModule {}
