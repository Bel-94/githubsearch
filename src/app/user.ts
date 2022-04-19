export class User {
    name: string;
    followers: number;
    following: number;
    bio: string;
    repositories: string;
    login: string;
    location: string;
    date: Date;
    image: string;


    constructor(name:string, followers:number, following:number, bio:string, repositories:string, login:string, location:string, date:Date, image:string) {
        this.name = name,
        this.followers = followers,
        this.following = following,
        this.bio = bio,
        this.repositories = repositories,
        this.login = login,
        this.location = location,
        this.date = new Date(),
        this.image = image
    }
}
