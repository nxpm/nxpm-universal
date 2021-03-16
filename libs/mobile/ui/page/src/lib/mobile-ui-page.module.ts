import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular'
import { MobileUiPageComponent } from './mobile-ui-page.component'

@NgModule({
  declarations: [MobileUiPageComponent],
  exports: [MobileUiPageComponent],
  imports: [CommonModule, IonicModule, RouterModule],
})
export class MobileUiPageModule {}
