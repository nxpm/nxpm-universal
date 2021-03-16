import { Component } from '@angular/core'
import { WebAuthStore } from '@nxpm-universal/web/auth/data-access'
import { WebUiFormField } from '@nxpm-universal/web/ui/form'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <auth-page
        (submitForm)="submit($event)"
        [errors]="vm.errors"
        [fields]="fields"
        buttonTitle="Register"
        linkPath="/login"
        linkTitle="Log in"
        pageTitle="Register"
      >
      </auth-page>
    </ng-container>
  `,
})
export class RegisterComponent {
  readonly vm$ = this.store.vm$
  readonly fields = [
    WebUiFormField.email('email', { label: 'Email', required: true }),
    WebUiFormField.password('password', { label: 'Password', required: true }),
    WebUiFormField.input('username', { label: 'Username', required: false }),
    WebUiFormField.input('firstName', { label: 'First name', required: false }),
    WebUiFormField.input('lastName', { label: 'Last name', required: false }),
  ]

  constructor(private readonly store: WebAuthStore) {}

  submit(input) {
    this.store.registerEffect(input)
  }
}
