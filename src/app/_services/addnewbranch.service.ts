import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddNewBranch } from '../admin/add-branches/new-branch-adds/newBranchModel';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class AddnewbranchService {

  private AUTH_API = 'http://localhost:8080/api/auth/';

  constructor(private http: HttpClient) {}

  getTasK(){
       return this.http.get(this.AUTH_API + 'getBranch');
  }

  addBranch(id:number, branchName: string, districtName: string, thanaName: string, 
    areaName: string, email:string, phoneNumber:string) {
    return this.http.post<AddNewBranch>(this.AUTH_API +'postBranch',
    {
      id, 
      branchName, 
      districtName, 
      thanaName, 
      areaName, 
      email, 
      phoneNumber 
    }, httpOptions);
  }


  delete(task: any) {
    return this.http.delete(this.AUTH_API + 'deleteBranch/' + task.id, httpOptions);
}


brchUpdate(task:any){
  return this.http.put(this.AUTH_API +'updateBranch/', task, httpOptions)
}

}
