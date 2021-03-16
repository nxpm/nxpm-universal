import { NgModule } from '@angular/core'
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
import { APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { CookieService } from 'ngx-cookie'

import { environment } from '../environments/environment'

export function createApollo(httpLink: HttpLink, cookieService: CookieService): ApolloClientOptions<any> {
  const http = httpLink.create({ uri: environment.graphql, withCredentials: true })
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
    cache: new InMemoryCache(),
    defaultOptions: { query: { fetchPolicy: 'no-cache' } },
  }
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, CookieService],
    },
  ],
})
export class WebCoreFeatureGraphQLModule {}
