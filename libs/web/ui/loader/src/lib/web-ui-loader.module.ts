import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiLoaderComponent } from './web-ui-loader.component'

@NgModule({
  declarations: [WebUiLoaderComponent],
  exports: [WebUiLoaderComponent],
  imports: [CommonModule],
})
export class WebUiLoaderModule {}
