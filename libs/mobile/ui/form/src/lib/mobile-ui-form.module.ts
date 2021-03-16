import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormlyModule } from '@ngx-formly/core'
import { FormlyIonicModule } from '@ngx-formly/ionic'

import { MobileUiFormComponent } from './mobile-ui-form.component'
import { UiFormValidatorsModule } from './validators/ui-form-validators.module'

@NgModule({
  declarations: [MobileUiFormComponent],
  exports: [MobileUiFormComponent],
  imports: [ReactiveFormsModule, FormlyModule.forRoot(), FormlyIonicModule, UiFormValidatorsModule],
})
export class MobileUiFormModule {}
