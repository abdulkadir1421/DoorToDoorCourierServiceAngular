import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AddnewbranchService } from 'src/app/_services/addnewbranch.service';

@Component({
  selector: 'app-veiw-branch-list',
  templateUrl: './veiw-branch-list.component.html',
  styleUrls: ['./veiw-branch-list.component.css']
})
export class VeiwBranchListComponent implements OnInit{

  UserListSearch:any;

  oderHeader:string="";
  isDescOrder:boolean=true;

  sort(headerName:string){
    this.isDescOrder= !this.isDescOrder;
  this.oderHeader=headerName; 
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

  forms:any = {
    id: 0,
    branchName: "",
    districtName: "",
    thanaName: "",
    areaName: "",
    email: "",
    phoneNumber: "",
  };

  constructor(private servise:AddnewbranchService, private router: Router){}
  
  ngOnInit(): void {
    this.servise.getTasK().subscribe((res)=>{
      this.form = res;

    })
  }



  delete(task: any){
    this.servise.delete(task).subscribe((res)=>{
      this.ngOnInit();
    })
  }

  edit(task:any){
    this.forms =task;
  }


  udpdate(){   
this.servise.brchUpdate(this.forms).subscribe((res)=>{
  // this.router.navigateByUrl('/admins/branch/BranchList');
 
})


  }

  title ='pagination'
  POSTS:any;
  page:number =1;
  count:number =0;
  tableSize:number =5;
  tableSizes:any=[5,10,15,20];

  onTableSizechange(event:any){
    this.page= event;
    this.form;
  }
  pagenUmber(){
    this.tableSize
  }



  
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



}
