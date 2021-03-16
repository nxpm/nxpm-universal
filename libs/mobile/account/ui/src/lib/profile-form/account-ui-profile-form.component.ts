import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { User } from '@nxpm-universal/mobile/core/data-access'
import { MobileUiFormField } from '@nxpm-universal/mobile/ui/form'

@Component({
  selector: 'account-profile-form',
  template: `
    <ui-form (submitForm)="submit($event.payload)" [model]="user" [fields]="fields" [form]="form"></ui-form>
    <div class="">
      <ui-button (handler)="submit($any(user))" [disabled]="!form.valid" label="Save"></ui-button>
    </div>
  `,
})
export class AccountUiProfileFormComponent {
  @Input() user: User = {}
  @Output() send = new EventEmitter()
  form = new FormGroup({})
  fields = [
    MobileUiFormField.input('firstName', { label: 'First name' }),
    MobileUiFormField.input('lastName', { label: 'Last name' }),
    MobileUiFormField.input('avatarUrl', { label: 'Avatar Url' }),
    MobileUiFormField.input('phone', { label: 'Phone' }),
    MobileUiFormField.input('location', { label: 'Location' }),
    MobileUiFormField.textarea('bio', { label: 'Biography' }),
  ]

  submit({ avatarUrl, bio, firstName, lastName, location, phone }) {
    this.send.emit({ avatarUrl, bio, firstName, lastName, location, phone })
  }
}
