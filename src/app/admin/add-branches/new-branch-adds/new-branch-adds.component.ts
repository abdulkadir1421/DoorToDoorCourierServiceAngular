import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AddnewbranchService } from 'src/app/_services/addnewbranch.service';

@Component({
  selector: 'app-new-branch-adds',
  templateUrl: './new-branch-adds.component.html',
  styleUrls: ['./new-branch-adds.component.css']
})
export class NewBranchAddsComponent implements OnInit {

thana2!: String;

  Lisstsssssss = [
    {
      name: "Chandpur",
    },
    {
      name: "Cumilla",

    },
    {
      name: "Chittogram",

    },
    {
      name: "Rajshahit",
    }
  ]


  Thana = [
    {
      name: "Hajigonj",
    },
    {
      name: "Cumilla",

    },
    {
      name: "Chittogram",

    },
    {
      name: "Rajshahit",
    }
  ]

  
  Thana2 = [
    {
      name: "Hajigonj",
    },
    {
      name: "Cumilla",

    },
    {
      name: "Chittogram",

    },
    {
      name: "Rajshahit",
    }
  ]

  
  Thana3 = [
    {
      name: "Hajigonj 3",
    },
    {
      name: "Cumilla 3",

    },
    {
      name: "Chittogram 3",

    },
    {
      name: "Rajshahit 3",
    }
  ]


  loadThana(id:any){
    console.log('id--event',id);
    if(id==='Chandpur'){
      this.Thana = this.Thana3;
    }else{
      this.Thana = this.Thana2;
    }
  }
  form: any = {

    id: null,
    branchName: null,
    districtName: null,
    thanaName: null,
    areaName: null,
    email: null,
    phoneNumber: null,
    
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AddnewbranchService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    const { id, branchName, districtName, thanaName, areaName, email, phoneNumber} = this.form;
    this.authService.addBranch(id, branchName, districtName, thanaName, areaName, email, phoneNumber).subscribe({
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
    this.router.navigateByUrl('admins/branch');    

  }




}
