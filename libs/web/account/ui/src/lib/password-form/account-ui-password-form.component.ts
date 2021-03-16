import { Component, EventEmitter, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { WebUiFormField } from '@nxpm-universal/web/ui/form'

@Component({
  selector: 'account-password-form',
  template: `
    <ui-form (submitForm)="submit($event.payload)" [model]="model" [fields]="fields" [form]="form"></ui-form>
    <div class="text-right">
      <ui-button (handler)="submit(model)" [disabled]="!form.valid" label="Reset"></ui-button>
    </div>
  `,
})
export class AccountUiPasswordFormComponent {
  @Output() send = new EventEmitter()
  model = {}
  form = new FormGroup({})
  fields = [
    WebUiFormField.password('currentPassword', {
      label: 'Current password',
      required: true,
      minLength: 10,
    }),
    WebUiFormField.password('password', {
      label: 'New password',
      required: true,
      minLength: 10,
    }),
    WebUiFormField.password('verified', {
      label: 'Verify new password',
      required: true,
      minLength: 10,
    }),
  ]

  submit(payload: any) {
    this.send.emit(payload)
  }
}
