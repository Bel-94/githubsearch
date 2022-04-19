import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user'
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  users!:any[]
  repos!:any[]

  constructor(private http: HttpClient) { }

  httpOptions={
    headers:new HttpHeaders({
      Authorization:`token ${environment.access_token}`
    })
  }

  getUsers(userName:string){
    let promise=new Promise<void>((resolve,reject)=>{
      this.http.get<any[]>(`${environment.BASE_URL}${userName}`,this.httpOptions).subscribe({
        next:(res:any)=>{
        console.log(res.items)
        this.users=res.items
        resolve()
      },
      error:(err:any)=>{
        reject(err)
      },
      complete:()=>{
        console.log("complete")
      },
      })
    })
    return promise
  }

  getRepos(repoName:string){
    let promise=new Promise<void>((resolve,reject)=>{
      this.http.get<any[]>(`${environment.base_repo_url}${repoName}`,this.httpOptions).subscribe({
        next:(res:any)=>{
        console.log(res)
        this.repos=res
        resolve()
      },
      error:(err:any)=>{
        reject(err)
      },
      complete:()=>{
        console.log("complete")
      },
      })
    })
    return promise
  }
  
}
