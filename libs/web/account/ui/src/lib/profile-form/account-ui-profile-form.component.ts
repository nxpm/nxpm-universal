import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { User } from '@nxpm-universal/web/core/data-access'
import { WebUiFormField } from '@nxpm-universal/web/ui/form'

@Component({
  selector: 'account-profile-form',
  template: `
    <ui-form (submitForm)="submit($event.payload)" [model]="user" [fields]="fields" [form]="form"></ui-form>
    <div class="text-right">
      <ui-button (handler)="submit($any(user))" [disabled]="!form.valid" label="Save"></ui-button>
    </div>
  `,
})
export class AccountUiProfileFormComponent {
  @Input() user: User = {}
  @Output() send = new EventEmitter()
  form = new FormGroup({})
  fields = [
    WebUiFormField.input('firstName', { label: 'First name' }),
    WebUiFormField.input('lastName', { label: 'Last name' }),
    WebUiFormField.input('avatarUrl', { label: 'Avatar Url' }),
    WebUiFormField.input('phone', { label: 'Phone' }),
    WebUiFormField.input('location', { label: 'Location' }),
    WebUiFormField.textarea('bio', { label: 'Biography' }),
  ]

  submit({ avatarUrl, bio, firstName, lastName, location, phone }) {
    this.send.emit({ avatarUrl, bio, firstName, lastName, location, phone })
  }
}
