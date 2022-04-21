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


  constructor(private apiSearch:ApiService) { }


  userArray!:any[]
  repoArray!:any[]

  isRepoEmpty:boolean=true

  user!:User
  repo!:any



  ngOnInit(): void {
    // this.getUsers("Sam")
    // this.getRepos("delani studio")
    this.getUser("Bel-94")
  }

  getUser(singleUser:string){
    this.apiSearch.getUser(singleUser).then(
      (success)=>{
        this.user=this.apiSearch.user
        console.log(this.user.login)
      },
      (error)=>{
        alert("User Not Found")
      }
    )
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
        this.isRepoEmpty=false
        console.log(this.repoArray)
      },
      (error)=>{
        alert("User Not Found")
      }
    )
  }

}
