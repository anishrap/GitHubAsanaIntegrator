import * as Octokit from '@octokit/rest';
import * as prompts from 'prompts';

export default new Octokit({
    auth: {
        username: 'anishrap',
        password: 'Borntofight@123',
        async on2fa() {
            return prompts({
                type: 'number',
                name: 'code',
                message: 'Two-factor authentication code:'
            });
        }
    }
});