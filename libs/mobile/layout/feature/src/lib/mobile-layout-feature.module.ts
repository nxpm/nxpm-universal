import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular'

import { MobileLayoutFeatureComponent } from './mobile-layout-feature.component'

@NgModule({
  declarations: [MobileLayoutFeatureComponent],
  exports: [MobileLayoutFeatureComponent],
  imports: [CommonModule, IonicModule, RouterModule],
})
export class MobileLayoutFeatureModule {}
