import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { UiIcon } from './enums/ui-icon.enum'

@Component({
  selector: 'ui-icon',
  templateUrl: './web-ui-icon.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebUiIconComponent {
  @Input() icon!: UiIcon | string
  @Input() size: 'lg' | 'md' | 'sm' | 'xs' = 'md'
}
