import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonComponent } from './web-ui-button.component'

@NgModule({
  declarations: [WebUiButtonComponent],
  exports: [WebUiButtonComponent],
  imports: [CommonModule, RouterModule],
})
export class WebUiButtonModule {}
