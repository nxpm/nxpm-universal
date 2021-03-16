import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CdkTableModule } from '@angular/cdk/table'
import { MobileUiTableComponent } from './mobile-ui-table.component'

@NgModule({
  declarations: [MobileUiTableComponent],
  exports: [MobileUiTableComponent],
  imports: [CommonModule, RouterModule, CdkTableModule],
})
export class MobileUiTableModule {}
