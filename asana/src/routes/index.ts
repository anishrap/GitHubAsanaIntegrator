import * as Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.status = 200;
    ctx.body = {
        msg: "asana works!"
    };

    await next();
});

export default router;