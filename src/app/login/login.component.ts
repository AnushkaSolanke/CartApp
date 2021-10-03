import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
selected:string=" ";
type:string="";
  loginArray=["User","Admin","Retailer"];

  constructor(private router: Router) { }

  ngOnInit(): void 
  {
   console.log(this.selected)
  }
  
  user()
  {
    
  }
  login(loginform:any)
  {
  console.log(loginform.value);
  console.log("ayfsjs"+this.type);
    if(this.type=="User")
    {  
     this.router.navigate(['showall']);
     console.log(this.selected);
    }
  }
  
  Login123()
  {
    console.log(this.selected);
    if(this.selected=="User")
    {  
     this.router.navigate(['showall']);
     console.log(this.selected);
    }
    if(this.selected=="Admin")
    {  
     this.router.navigate(['tempproduct',this.selected]);
     console.log(this.selected);
    }
    if(this.selected=="Retailer")
    {  
     this.router.navigate(['tempproduct',this.selected]);
     console.log(this.selected);
    }
  }
 

 


}