import * as koa from 'koa';
import * as json from 'koa-json';
import * as logger from 'koa-logger';
import * as bodyParser from 'koa-bodyparser';

import router from './routes/index';

const app = new koa();

//Middlewares
app.use(json());
app.use(logger());
app.use(bodyParser());

//Routes
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log("> Koa started on port 4000");
});
