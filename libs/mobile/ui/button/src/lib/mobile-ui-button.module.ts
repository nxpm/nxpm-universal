import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { MobileUiButtonComponent } from './mobile-ui-button.component'

@NgModule({
  declarations: [MobileUiButtonComponent],
  exports: [MobileUiButtonComponent],
  imports: [CommonModule, RouterModule],
})
export class MobileUiButtonModule {}
