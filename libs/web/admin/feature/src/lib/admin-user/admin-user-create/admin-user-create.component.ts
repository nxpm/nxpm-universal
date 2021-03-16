import { Component } from '@angular/core'
import { AdminCreateUserInput, Role } from '@nxpm-universal/web/core/data-access'
import { WebUiFormField } from '@nxpm-universal/web/ui/form'
import { AdminUserCreateStore } from './admin-user-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header title="Create User" linkPath=".." linkTitle="Back"></ui-page-header>
      <user-form [fields]="fields" [user]="{}" (submitForm)="createUser($event)"></user-form>
    </ng-container>
  `,
  providers: [AdminUserCreateStore],
})
export class AdminUserCreateComponent {
  readonly vm$ = this.store.vm$
  fields = [
    WebUiFormField.radio('role', {
      label: 'Role',
      required: true,
      options: Object.keys(Role).map((value) => ({ value, label: value })),
    }),
    WebUiFormField.input('email', { label: 'Email', required: true }),
    WebUiFormField.input('username', { label: 'Username' }),
    WebUiFormField.input('firstName', { label: 'First name' }),
    WebUiFormField.input('lastName', { label: 'Last name' }),
  ]
  constructor(private readonly store: AdminUserCreateStore) {}

  createUser(input: AdminCreateUserInput) {
    this.store.createUserEffect(input)
  }
}
