import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router'
import { WebCoreDataAccessService } from '@nxpm-universal/web/core/data-access'
import { EMPTY, Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { WebAuthStore } from '../web-auth-data-access.store'

@Injectable()
export class IsLoggedInGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private readonly data: WebCoreDataAccessService,
    private readonly store: WebAuthStore,
    private readonly router: Router,
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.isAuthenticated(state.url)
  }

  canActivateChild(): Observable<boolean | UrlTree> {
    return this.isAuthenticated()
  }

  canLoad(): Observable<boolean | UrlTree> {
    return this.isAuthenticated()
  }

  private isAuthenticated(url?: string): Observable<boolean | UrlTree> {
    return this.data.me().pipe(
      map((res) => !!res.data.me),
      catchError((err) => {
        console.error(err)
        return of(false)
      }),
      map((loggedIn: boolean) => {
        console.log('isAuthenticated', url, loggedIn)
        if (!loggedIn) {
          return this.router.createUrlTree(['/login'], {
            queryParams: { url },
          })
        }
        return true
      }),
    )
  }
}
