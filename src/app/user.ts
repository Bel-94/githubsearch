export class User {
    login:string;
    id:number;
    followers:number;

    constructor(login:string, id:number, followers:number, following:number, bio:string, public_repos:number,  location:string, date:Date, avatar_url:string) {
    
        this.login = login
        this.id = id
        this.followers = followers
    }
}
