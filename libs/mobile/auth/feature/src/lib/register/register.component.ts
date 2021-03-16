import { Component } from '@angular/core'
import { MobileAuthStore } from '@nxpm-universal/mobile/auth/data-access'
import { MobileUiFormField } from '@nxpm-universal/mobile/ui/form'

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
    MobileUiFormField.input('email', { label: 'Email', required: true }),
    MobileUiFormField.password('password', {
      label: 'Password',
      required: true,
    }),
    MobileUiFormField.input('username', { label: 'Username', required: false }),
    MobileUiFormField.input('firstName', {
      label: 'First name',
      required: false,
    }),
    MobileUiFormField.input('lastName', {
      label: 'Last name',
      required: false,
    }),
  ]

  constructor(private readonly store: MobileAuthStore) {}

  submit(input) {
    this.store.registerEffect(input)
  }
}
