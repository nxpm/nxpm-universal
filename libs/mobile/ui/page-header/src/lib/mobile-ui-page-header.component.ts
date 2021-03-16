import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-page-header',
  template: `
    <div class="">
      <div class="">
        {{ title }}
      </div>
      <ui-button [label]="linkTitle" [routerLink]="linkPath"></ui-button>
    </div>
  `,
})
export class MobileUiPageHeaderComponent {
  @Input() title?: string
  @Input() linkPath?: string
  @Input() linkTitle?: string
}
