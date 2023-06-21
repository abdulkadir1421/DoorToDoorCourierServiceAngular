import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../_services/auth-service.service';

@Component({
  selector: 'app-regi-form',
  templateUrl: './regi-form.component.html',
  styleUrls: ['./regi-form.component.css']
})
export class RegiFormComponent implements OnInit {
  // selectedFiles?: FileList;
  selectedFiles:any;
  progressInfos: any[] = [];
  message: string[] = [];

  form: any = {
    username: null,
    userfullname: null,
    email: null,
    password: null,
    file: null,
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.form.file = this.selectedFiles;
    this.authService.uploadFile(this.form.file).subscribe(()=>{
      console.log("sssssaved");
      
    })

    const { username, userfullname, email, password, file } = this.form;

    console.log(this.form);
    
    this.authService.register2(username, userfullname, email, password, file).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true; 
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  


  popupClose(){
    this.isSuccessful = false;
    this.form =null;    

  }

  
  selectFiles(event: any): void {
    // this.message = [];
    // this.progressInfos = [];
    this.selectedFiles = event.target.files[0];
    console.log('file',this.selectFiles);
    
  }

  


}
