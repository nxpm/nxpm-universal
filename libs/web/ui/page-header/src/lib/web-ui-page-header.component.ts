import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-page-header',
  template: `
    <div class="flex justify-between items-center  px-6 py-3 mb-3 md:mb-6 bg-gray-800 text-gray-300 shadow rounded-md">
      <div class="text-lg font-semibold">
        {{ title }}
      </div>
      <ui-button [label]="linkTitle" [routerLink]="linkPath"></ui-button>
    </div>
  `,
})
export class WebUiPageHeaderComponent {
  @Input() title?: string
  @Input() linkPath?: string
  @Input() linkTitle?: string
}
