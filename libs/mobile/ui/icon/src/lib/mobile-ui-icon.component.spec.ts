import { createComponentFactory, Spectator } from '@ngneat/spectator/jest'
import { SvgIconComponent, SvgIconsModule } from '@ngneat/svg-icon'

import { MobileUiIconComponent } from './mobile-ui-icon.component'

describe('MobileUiIconComponent', () => {
  let spectator: Spectator<MobileUiIconComponent>

  const createComponent = createComponentFactory({
    component: MobileUiIconComponent,
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
