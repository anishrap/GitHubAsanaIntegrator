import * as Router from 'koa-router';
import { PullRequest } from '../services/index';

const router = new Router();

router.get('/', async (ctx, next) => {
    const pullRequest = new PullRequest("anishrap");

    const temp = await pullRequest.getOpenPullRequests();
    const res = await pullRequest.getRepos();

    console.log("temp: ", temp.data);

    ctx.status = 200;
    ctx.body = {
        results: res
    };

    await next();
});

export default router;