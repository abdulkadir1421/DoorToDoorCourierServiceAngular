import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';





const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private AUTH_API = 'http://localhost:8080/api/auth/';

  constructor(private http: HttpClient) { }


  getTasK() {
    return this.http.get(this.AUTH_API + 'getUser');
  }

  activeAndInactive(task: any, status: boolean) {
    return this.http.delete(this.AUTH_API + 'user?username=' + task.userName + '&status=' + status, httpOptions);
  }


  login(username: string, password: string): Observable<any> {
    return this.http.post(
      this.AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, userfullname: string, email: string, password: string): Observable<any> {



    return this.http.post(
      this.AUTH_API + 'signup',
      {
        username,
        userfullname,
        email,
        password
      },
      httpOptions
    );
  }



  register2(username: string, userfullname: string, email: string, password: string, file: any): Observable<any> {

    const formData: FormData = new FormData();

    formData.append('image', file);


    console.log(username);


    return this.http.post(
      this.AUTH_API + 'signup2?username=' +username+'&userfullname='+userfullname+'&email='+email+'&password='+password , formData,
      {
        reportProgress: true,
        responseType: 'json'
      }
    );
  }

  empregister(userfullname: string, username: string, email: string, password: string,
    branchName: string, empcatagoryname: string, phnumber: string, gender: string): Observable<any> {
    return this.http.post(
      this.AUTH_API + 'empRegi',
      {
        userfullname,
        username,
        email,
        password,
        branchName,
        empcatagoryname,
        phnumber,
        gender,

      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(this.AUTH_API + 'signout', {}, httpOptions);
  }




  delete(task: any) {
    return this.http.delete(this.AUTH_API + 'userPdelete/' + task.id, httpOptions);
  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(this.AUTH_API+'upload', formData);
  }
  uploadFileProfile(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(this.AUTH_API+'upload', formData);
  }
  
  updateProfilePicture(file: File) {
    const formData = new FormData();
    formData.append('file', file);

console.log("dddd"+file);
    return this.http.post(this.AUTH_API+'upload', formData);
  }
}
