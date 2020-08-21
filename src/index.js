import koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import koaBody from 'koa-body'
import jsonUtil from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'

import router from './routes/routes'

const app = new koa()

/**
 * 使用koa-compose，集成中间件
 * */
const middleware = compose([
    koaBody(),
    statics(path.join(__dirname, '../public')),
    cors(),
    jsonUtil({pretty: false, param: 'pretty'}),
    helmet()
])

app.use(middleware)
app.use(router())

app.listen(3000)
