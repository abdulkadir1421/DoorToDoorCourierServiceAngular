import { Component, OnInit, } from '@angular/core';
import { AddnewbranchService } from 'src/app/_services/addnewbranch.service';
import { AuthServiceService } from 'src/app/_services/auth-service.service';
import { UserCourierServisesService } from 'src/app/_services/user-courier-servises.service';
import { p_informationModel } from 'src/app/user/product-information/productInformation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{


  
  form: any = {
    id: null,
    branchName: null,
    districtName: null,
    thanaName: null,
    areaName: null,
    email: null,
    phoneNumber: null,
    
  };

  forms: any = {
    userfullname: null,
    username: null,
    email: null,
    password: null,
    branchName: null,
    empcatagoryname: null,
    phnumber: null,
    gender: null
    
  };

  fors:any={
      id:null,
      prodcuttype:null,
      productname:null,
      productwidth:null,
      productheight:null,
      p_senderName:null,
      p_senderAge:null,
      p_senderGender:null,
      p_senderPhone:null,
      p_senderDistrict:null,
      p_senderThana:null,
      p_senderArea:null,
      p_ReceiverName:null,
      p_ReceiverAge:null,
      p_ReceiverGender:null,
      p_ReceiverPhone:null,
      p_ReceiverDistrict:null,
      p_ReceiverThana:null,
      p_ReceiverArea:null    
  }
  formPending!:p_informationModel[];
  formReceived!:p_informationModel[];
  formOnTheWay!:p_informationModel[];
  formCancel!:p_informationModel[];
  formDelivered!:p_informationModel[];


  constructor(private AddnewBranchservise:AddnewbranchService, 
    private authservic:AuthServiceService, private CouriearServise:UserCourierServisesService){}
  
  ngOnInit(): void {
    this.AddnewBranchservise.getTasK().subscribe((res)=>{
      this.form = res;
           
    })

    this.authservic.getTasK().subscribe((res)=>{
      this.forms = res;
    })

    this.CouriearServise.getCourier('Pending').subscribe((res:any)=>{
      this.formPending = res;    
               
    })
    this.CouriearServise.getCourier('Received').subscribe((res:any)=>{
      this.formReceived = res;    
               
    })
    this.CouriearServise.getCourier('OnTheWay').subscribe((res:any)=>{
      this.formOnTheWay = res;    
               
    })
    this.CouriearServise.getCourier('Cancel').subscribe((res:any)=>{
      this.formCancel = res;    
               
    })
    this.CouriearServise.getCourier('Delivered').subscribe((res:any)=>{
      this.formDelivered = res;    
               
    })

    this.CouriearServise.getCourier(null).subscribe((res)=>{
      this.fors = res;
    })
   
  }


 

}
