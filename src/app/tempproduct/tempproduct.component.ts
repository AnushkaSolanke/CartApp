import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { RetailerService } from '../retailer.service';
import { Tempproduct } from '../tempproduct';

@Component({
  selector: 'app-tempproduct',
  templateUrl: './tempproduct.component.html',
  styleUrls: ['./tempproduct.component.css']
})
export class TempproductComponent implements OnInit {

  adminloggedin:any
  retailerloggedin:any
  constructor(private ret:RetailerService,private adm:AdminService,private activeroute:ActivatedRoute) { }

  tempprodArray:any
  t:Tempproduct=new Tempproduct()
  logged:any

  ngOnInit(): void 
  {
    this.activeroute.paramMap.subscribe(
      params=> {
          this.logged=params.get("id") as string;
          console.log("Logged In :"+this.logged);
      } 
    )   
    if(this.logged=="Admin")
    {
      this.adminloggedin=true;
      this.retailerloggedin=false;
      
    }
    else
    {
      this.retailerloggedin=true;
      this.adminloggedin=false;
    }
  }


  acceptbyadmin(t:Tempproduct)
{
  this.adm.acceptproduct(t).subscribe
  (
    (data)=>{
      console.log(data)
      if(data)
         alert("Product Accepted")
    },
    (error)=>
      console.log(error)
  );
}

displayproducts()
{
  this.ret.showproductstatus().subscribe(
    (data)=>{
      console.log(data);
      this.tempprodArray=data;
      console.log(this.tempprodArray);
    },
    (error)=>
    {
      console.log(error);
    }
    
  )
}

rejectbyadmin(t:Tempproduct)
{
 this.adm.rejectproduct(t).subscribe
 (
  (data)=>{
    console.log(data)
    if(data)
       alert("Product Rejected");
  },
  (error)=>
    console.log(error)
 );
 
}



  

}

