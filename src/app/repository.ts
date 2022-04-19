export class Repository {
    name: string;
    description: string;
    html_url: string;
    language: string;
    constructor(name:string, description:string, html_url:string, language:string) {
        this.name = name,
        this.description = description,
        this.html_url = html_url,
        this.language = language
    }
}
