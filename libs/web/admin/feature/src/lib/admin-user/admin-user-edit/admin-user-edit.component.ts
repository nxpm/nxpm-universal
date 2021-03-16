import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { AdminUpdateUserInput, Role } from '@nxpm-universal/web/core/data-access'
import { WebUiFormField } from '@nxpm-universal/web/ui/form'
import { AdminUserEditStore } from './admin-user-edit.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header [title]="'Edit user ' + vm.user?.username" linkPath=".." linkTitle="Back"></ui-page-header>
      <ng-container *ngIf="vm.user">
        <user-form [form]="form" [fields]="fields" [user]="vm.user" (submitForm)="updateUser($event)"></user-form>
      </ng-container>
    </ng-container>
  `,
  providers: [AdminUserEditStore],
})
export class AdminUserEditComponent {
  readonly vm$ = this.store.vm$
  readonly form = new FormGroup({})
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
    WebUiFormField.input('phone', { label: 'Phone' }),
    WebUiFormField.input('avatarUrl', { label: 'Avatar Url' }),
    WebUiFormField.input('location', { label: 'Location' }),
    WebUiFormField.textarea('bio', { label: 'Bio' }),
  ]

  constructor(private readonly store: AdminUserEditStore) {}

  updateUser(input: AdminUpdateUserInput) {
    const { role, username, firstName, lastName, phone, avatarUrl, location, bio } = input
    this.store.updateUserEffect({
      role,
      username,
      firstName,
      lastName,
      phone,
      avatarUrl,
      location,
      bio,
    })
  }
}
