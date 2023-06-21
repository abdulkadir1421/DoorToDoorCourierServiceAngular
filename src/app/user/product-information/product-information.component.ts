import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { UserCourierServisesService } from 'src/app/_services/user-courier-servises.service';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent implements OnInit{



  constructor(private ser:UserCourierServisesService, private router: Router){}


  form!:FormGroup;

  ngOnInit(): void {
    this.form=new FormGroup({
      id:new FormControl(),

    //    SenderVaiable
      p_senderName:new FormControl(''),
      p_senderGender:new FormControl(''),
      p_senderPhone:new FormControl(''),
      p_senderAddress:new FormControl(''),

    //    ReciverVariable
      p_ReceiverName:new FormControl(''),
      p_ReceiverGender:new FormControl(''),
      p_ReceiverPhone:new FormControl(''),
      p_ReceiverAddress:new FormControl(''),

    //    courier item variable
      prodcuttype:new FormControl(''),
      productname:new FormControl(''),
      productwidth:new FormControl(''),
      productheight:new FormControl(''),
      productweight:new FormControl(''),
      chargeAmount:new FormControl(''),
      paymentMethod:new FormControl(''),
      userName:new FormControl(''),
     })
   
  }



  saveValue(){
    console.log("ddd ="+this.form.value.productname);
    this.ser.saveProduct(this.form.value).subscribe(() => {alert("success")})
    // this.router.navigateByUrl('CourieraViewlist');
    this.ngOnInit();
    
  }

  

}
