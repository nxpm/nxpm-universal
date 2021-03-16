import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CdkTableModule } from '@angular/cdk/table'
import { WebUiTableComponent } from './web-ui-table.component'

@NgModule({
  declarations: [WebUiTableComponent],
  exports: [WebUiTableComponent],
  imports: [CommonModule, RouterModule, CdkTableModule],
})
export class WebUiTableModule {}
