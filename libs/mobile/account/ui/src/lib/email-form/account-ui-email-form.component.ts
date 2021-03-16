import { Component, EventEmitter, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { MobileUiFormField } from '@nxpm-universal/mobile/ui/form'

@Component({
  selector: 'account-email-form',
  template: `
    <ui-form (submitForm)="submit($event.payload)" [model]="model" [fields]="fields" [form]="form"></ui-form>
    <div class="">
      <ui-button (handler)="submit(model)" [disabled]="!form.valid" label="Save"></ui-button>
    </div>
  `,
})
export class AccountUiEmailFormComponent {
  @Output() send = new EventEmitter()
  model = {}
  form = new FormGroup({})
  fields = [MobileUiFormField.input('email', { required: true })]

  submit(payload: any) {
    this.send.emit(payload)
  }
}
