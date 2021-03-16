import { createComponentFactory, Spectator } from '@ngneat/spectator/jest'
import { SvgIconComponent, SvgIconsModule } from '@ngneat/svg-icon'

import { WebUiIconComponent } from './web-ui-icon.component'

describe('WebUiIconComponent', () => {
  let spectator: Spectator<WebUiIconComponent>

  const createComponent = createComponentFactory({
    component: WebUiIconComponent,
    imports: [
      SvgIconsModule.forRoot({
        icons: { data: '<svg>foo</svg>', name: 'foo' },
      }),
    ],
  })

  beforeEach(() => {
    spectator = createComponent({
      props: {
        icon: 'foo',
      },
    })
  })

  it('should create', () => {
    expect(spectator.component).toBeTruthy()
    expect(spectator.query(SvgIconComponent)?.key).toEqual('foo')
  })
})
