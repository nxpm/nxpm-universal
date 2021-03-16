import { Injectable } from '@angular/core'
import { WebAuthStore } from '@nxpm-universal/web/auth/data-access'
import { Role } from '@nxpm-universal/web/core/data-access'
import { ComponentStore } from '@ngrx/component-store'

export interface WebLayoutLink {
  label: string
  route: string
  role?: Role
}

export interface WebLayoutState {
  theme: 'dark' | 'light'
  logo: string
  footerHtml: string
  links: WebLayoutLink[]
  profileLinks: WebLayoutLink[]
}

@Injectable()
export class WebLayoutStore extends ComponentStore<WebLayoutState> {
  constructor(private readonly authStore: WebAuthStore) {
    super({
      theme: 'dark',
      logo: '/assets/images/logo.png',
      footerHtml: `Copyright &copy; ${new Date().getFullYear()}`,
      links: [
        { label: 'Dashboard', route: '/dashboard' },
        { label: 'Admin', route: '/admin', role: Role.Admin },
      ],
      profileLinks: [
        { label: 'Dashboard', route: '/dashboard' },
        { label: 'Your Account', route: '/account' },
        { label: 'Admin', route: '/admin', role: Role.Admin },
        { label: 'About', route: '/about' },
        { label: 'Logout', route: '/logout' },
      ],
    })
  }

  readonly user$ = this.authStore.user$
  readonly links$ = this.select(this.authStore.user$, this.state$, (user, state) => ({
    main: state.links.filter((l) => (l.role ? l.role === user.role : l)),
    profile: state.profileLinks.filter((l) => (l.role ? l.role === user.role : l)),
  }))

  readonly layout$ = this.select(({ logo, footerHtml, theme }) => ({
    logo,
    footerHtml,
    theme,
  }))
  readonly vm$ = this.select(this.user$, this.links$, this.layout$, (user, links, layout) => ({
    user,
    links,
    layout,
  }))
}
