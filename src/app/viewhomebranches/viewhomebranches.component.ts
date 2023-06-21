import { Component, OnInit } from '@angular/core';
import { AddnewbranchService } from '../_services/addnewbranch.service';

@Component({
  selector: 'app-viewhomebranches',
  templateUrl: './viewhomebranches.component.html',
  styleUrls: ['./viewhomebranches.component.css']
})
export class ViewhomebranchesComponent implements OnInit {

  
  form: any = {
    id: null,
    branchName: null,
    districtName: null,
    thanaName: null,
    areaName: null,
    email: null,
    phoneNumber: null,
    
  };

  constructor(private servise:AddnewbranchService){}
  
  ngOnInit(): void {
    this.servise.getTasK().subscribe((res)=>{
      this.form = res;

    })
  }



  // delete(task: any){
  //   this.servise.delete(task).subscribe((res)=>{
  //     this.ngOnInit();
  //   })
  // }


}
