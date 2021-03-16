import { Injectable } from '@angular/core'
import { MobileAuthStore } from '@nxpm-universal/mobile/auth/data-access'
import { Role } from '@nxpm-universal/mobile/core/data-access'
import { ComponentStore } from '@ngrx/component-store'

export interface MobileLayoutFeatureLink {
  label?: string
  route?: string
  icon?: string
  divider?: boolean
  role?: Role
}

export interface MobileLayoutFeatureState {
  theme: 'dark' | 'light'
  logo: string
  title: string
  subTitle: string
  footerHtml: string
  links: MobileLayoutFeatureLink[]
}

@Injectable()
export class MobileLayoutFeatureStore extends ComponentStore<MobileLayoutFeatureState> {
  constructor(private readonly authStore: MobileAuthStore) {
    super({
      theme: 'dark',
      logo: '/assets/images/logo.png',
      title: 'NXPM',
      subTitle: 'Ionic / Angular',
      footerHtml: `Copyright &copy; ${new Date().getFullYear()}`,
      links: [
        { label: 'Dashboard', icon: 'grid', route: '/dashboard' },
        { divider: true },
        { label: 'Your Account', icon: 'person', route: '/account' },
        { label: 'About', icon: 'information-circle', route: '/about' },
        { label: 'Logout', icon: 'log-out', route: '/logout' },
      ],
    })
  }

  readonly user$ = this.authStore.user$
  readonly links$ = this.select(this.authStore.user$, this.state$, (user, state) => ({
    main: state.links.filter((l) => (l.role ? l.role === user.role : l)),
  }))

  readonly layout$ = this.select(({ logo, footerHtml, theme, subTitle, title }) => ({
    logo,
    footerHtml,
    theme,
    subTitle,
    title,
  }))
  readonly vm$ = this.select(this.user$, this.links$, this.layout$, (user, links, layout) => ({
    user,
    links,
    layout,
  }))
}
