import octokit from '../init-octokit';

export default class PullRequest {
    user: string;

    constructor(user: string) {
        this.user = user;
    }

    async getOpenPullRequests() {
        return octokit.pulls.list({
           owner: "Darkdoughnut",
           repo: "RedyWatch" 
        });
    }

    async getRepos() {
        let temp:any = await octokit.repos.list();
        let res:String[] = []
        temp.data.map(obj => {
            res.push(obj.name);
        })
        // console.log("res: ", res);
        return res;
    }
}