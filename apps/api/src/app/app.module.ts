import { Logger, Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { ApiCoreFeatureModule } from '@nxpm-universal/api/core/feature'
import { ensureDirSync, existsSync, writeFileSync } from 'fs-extra'
import { join } from 'path'

const rootPath = join(__dirname, '..', 'web')

@Module({
  imports: [
    ApiCoreFeatureModule,
    ServeStaticModule.forRoot({
      rootPath,
      exclude: ['/api/*', '/graphql'],
    }),
  ],
})
export class AppModule {
  constructor() {
    if (!existsSync(rootPath)) {
      ensureDirSync(rootPath)
      writeFileSync(join(rootPath, 'index.html'), `<pre>@nxpm/stack api</pre>`)
      Logger.verbose(`Created static root path ${rootPath}`)
    }
  }
}
