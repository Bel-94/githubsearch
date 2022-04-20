import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service'
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

  users:User[]=[
    new User: (name:"Bel-94", id: 100135405, followers:3, following: 9, bio:"", public_repos: 18, location: "", date:new Date, _avatar_url:"https://avatars.githubusercontent.com/u/100135405?v=4")
  ]

  repos:Repository[]=[

  ]

  constructor(private apiSearch:ApiService) { }

  userArray!:any[]
  repoArray!:any[]


  ngOnInit(): void {
    // this.getUsers("Sam")
    // this.getRepos("delani studio")
  }

  getUsers(userName:string){
    this.apiSearch.getUsers(userName).then(
      (success)=>{
        this.userArray=this.apiSearch.users
        console.log(this.userArray)
      },
      (error)=>{
        alert("User Not Found")
      }
    )
  }

  getRepos(repoName:string){
    this.apiSearch.getRepos(repoName).then(
      (success)=>{
        this.repoArray=this.apiSearch.repos
        console.log(this.repoArray)
      },
      (error)=>{
        alert("User Not Found")
      }
    )
  }

}
