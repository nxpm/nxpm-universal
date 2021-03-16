import { NgModule } from '@angular/core'
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core'
import { APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'

import { environment } from '../environments/environment'

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const http = httpLink.create({ uri: environment.graphql, withCredentials: true })

  return {
    link: http,
    cache: new InMemoryCache(),
    defaultOptions: { query: { fetchPolicy: 'no-cache' } },
  }
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class WebCoreFeatureGraphQLModule {}
