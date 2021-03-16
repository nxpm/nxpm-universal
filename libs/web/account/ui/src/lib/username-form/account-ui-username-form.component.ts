import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { User } from '@nxpm-universal/web/core/data-access'
import { WebUiFormField } from '@nxpm-universal/web/ui/form'

@Component({
  selector: 'account-username-form',
  template: `
    <ui-form (submitForm)="submit($event.payload)" [model]="user" [fields]="fields" [form]="form"></ui-form>
    <div class="text-right">
      <ui-button (handler)="submit($any(user))" [disabled]="!form.valid" label="Save"></ui-button>
    </div>
  `,
})
export class AccountUiUsernameFormComponent {
  @Input() user: User = {}
  @Output() send = new EventEmitter()
  form = new FormGroup({})
  fields = [
    WebUiFormField.input('username', {
      minLength: 3,
      maxLength: 25,
      label: 'Username',
    }),
  ]

  submit({ username }) {
    this.send.emit({ username })
  }
}
