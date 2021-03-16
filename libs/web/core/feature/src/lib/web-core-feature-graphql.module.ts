import { NgModule } from '@angular/core'
import { makeStateKey, TransferState } from '@angular/platform-browser'
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
import { APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { CookieService } from 'ngx-cookie'

import { environment } from '../environments/environment'
const STATE_KEY = makeStateKey<any>('apollo.state')
export function createApollo(
  httpLink: HttpLink,
  cookieService: CookieService,
  transferState: TransferState,
): ApolloClientOptions<any> {
  const http = httpLink.create({ uri: environment.graphql, withCredentials: true })
  const cache = new InMemoryCache()
  const isBrowser = transferState.hasKey<any>(STATE_KEY)

  if (isBrowser) {
    onBrowser()
  } else {
    onServer()
  }

  function onServer() {
    transferState.onSerialize(STATE_KEY, () => {
      return cache.extract()
    })
  }

  function onBrowser() {
    const state = transferState.get<any>(STATE_KEY, null)

    cache.restore(state)
  }

  const basic = setContext(() => ({
    headers: {
      Accept: 'charset=utf-8',
    },
  }))

  const auth = setContext(() => ({
    headers: {
      Authorization: `Bearer ${cookieService.get('__session')}`,
    },
  }))

  return {
    link: ApolloLink.from([basic, auth, http]),
    cache,
    defaultOptions: {
      // query: { fetchPolicy: 'no-cache' },
    },
    ssrMode: true,
  }
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, CookieService, TransferState],
    },
  ],
})
export class WebCoreFeatureGraphQLModule {}
