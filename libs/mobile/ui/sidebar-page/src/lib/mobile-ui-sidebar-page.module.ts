import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { MobileUiPageModule } from '@nxpm-universal/mobile/ui/page'
import { MobileUiSidebarPageComponent } from './mobile-ui-sidebar-page.component'

@NgModule({
  declarations: [MobileUiSidebarPageComponent],
  exports: [MobileUiSidebarPageComponent],
  imports: [CommonModule, RouterModule, MobileUiPageModule],
})
export class MobileUiSidebarPageModule {}
