import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user';

@Component({
  selector: 'app-gitsearch-form',
  templateUrl: './gitsearch-form.component.html',
  styleUrls: ['./gitsearch-form.component.css']
})
export class GitsearchFormComponent implements OnInit {

  constructor(private service:ApiService) { }

   


  userArray!:any[]
  repoArray!:any[]

  ngOnInit(): void {
  }

  

  getUsers(userName:string){
    this.service.getUsers(userName).then(
      (success)=>{
        this.userArray=this.service.users
        console.log(this.userArray)
      },
      (error)=>{
        alert("User Not Found")
      }
    )
  }

  getRepos(repoName:string){
    this.service.getRepos(repoName).then(
      (success)=>{
        this.repoArray=this.service.repos
        console.log(this.repoArray)
      },
      (error)=>{
        alert("User Not Found")
      }
    )
  }

}
