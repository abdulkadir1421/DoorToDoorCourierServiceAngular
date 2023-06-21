import { Component, Input, OnInit } from '@angular/core';
import { StorageServiceService } from '../_services/storage-service.service';
import { Router } from '@angular/router';
import { AuthServiceService } from '../_services/auth-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent  implements OnInit{
  selectedFiles: any;
  profilePictureUrl:any;

  constructor(
    private storageService: StorageServiceService,
    private authService:AuthServiceService,
    private htt:HttpClient,
    private router: Router

  ) {}

  form: any = {
    file: null,
  };

  username?: string;
  userfullname?:string;
  emails?:string;
  passwords?:string;
  phn?:string;
  branchname?:string;
  gender?:string;
  photo?:File;




  ngOnInit(): void {
    const user = this.storageService.getUser();
    this.username = user.userName;
    this.userfullname = user.userFullName;
    this.emails = user.email;
    this.passwords = user.password;
    this.phn = user.phNumber;
    this.branchname = user.branchName;
    this.photo = user.file;
    
  }
 
  // confirm(){
  //   this.form.file = this.selectedFiles;
  //   this.authService.uploadFile(this.form.file).subscribe(()=>{
  //     console.log("sssssaved");
      
  //   })
  // }
  selectFiles(event: any): void {
    // this.message = [];
    // this.progressInfos = [];
    this.selectedFiles = event.target.files[0];
    this.profilePictureUrl = URL.createObjectURL(this.selectedFiles);
    console.log('file',this.selectFiles);
    
  }

  // this.servise.getTasK().subscribe((res)=>{
  //   this.form = res;

  // })




  // -----------------------------


  url: any;
  message: any;

  imagePath: any;
  onFileChanged(event: any) {
    const files = event.target.files;
    if (files.length === 0)
        return;
        this.selectedFiles = event.target.files[0];

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
        this.url = reader.result; 
    }
}

uploadProfilePicture() {
  if (this.selectedFiles) {
    console.log("ddddddd");
    
    this.authService.updateProfilePicture(this.selectedFiles).subscribe(
      (response: any) => {
        console.log('Profile picture updated successfully:', response);
        // Update the profile picture URL to display the new picture
        // You can fetch the updated URL from the response or generate it locally
        this.profilePictureUrl = 'path/to/new/profile/picture.jpg';
      },
      (error: any) => {
        console.log('Error updating profile picture:', error);
      }
    );
  }
}
onUpload() {
  
      console.log(this.selectedFiles +"comes images");

      //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
  
      const uploadImageData = new FormData();
 
      uploadImageData.append('imageFile', this.selectedFiles);
 
      //Make a call to the Spring Boot Application to save the image
 
      this.htt.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
  
        .subscribe((response) => {
  
          if (response.status === 200) {
  
            this.message = 'Image uploaded successfully';
  
          } else {
  
            this.message = 'Image not uploaded successfully';
  
          }
 
        },

        );
    }
}
