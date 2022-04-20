export class User {
    login: string;
    id: number;
    followers: number;
    following: number;
    bio: string;
    public_repos: number;
    location: string;
    date: Date;
    avatar_url: string;


    constructor(login:string, id:number, followers:number, following:number, bio:string, public_repos:number,  location:string, date:Date, avatar_url:string) {
        this.login = login,
        this.id = id,
        this.followers = followers,
        this.following = following,
        this.bio = bio,
        this.public_repos = public_repos
        this.location = location,
        this.date = new Date(),
        this.avatar_url = avatar_url
    }
}
