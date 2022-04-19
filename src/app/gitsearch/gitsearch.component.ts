import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service'

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

  constructor(private apiSearch:ApiService) { }

  userArray!:any[]
  repoArray!:any[]


  ngOnInit(): void {
    this.getUsers("Sam")
    this.getRepos("delani studio")
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
