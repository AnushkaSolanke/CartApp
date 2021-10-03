
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router:Router,private userservice:UserService) { }

  ngOnInit(): void {
        
    /*this.userservice.getcartIdByUser(userid).subscribe(data=>
      {this.cartid=data;
      console.log(this.cartid)}*/ 
    this.userservice.getMyCart(this.cartid).subscribe(data=>{
      this.cartMyDTO=data;
      console.log(data);
    }
    )
  }


status:boolean=false;
userid:number|undefined;
cartid:number=1;
cartMyDTO:any;
totalPrice: number = 0;
buyProductButton: boolean = false;
popUp:boolean|undefined;
message:string="";
error:boolean=false;
Object:any;


buyProductF(){

  if(this.totalPrice==0)
  {
    return;
  }
  else{
    
   /*Encription
   let encr=this.EncrDecr.set('123456$#@$^@1ERF',this.totalPrice.toString())
   
   sessionStorage.setItem('pay',encr);

  this.router.navigate(['/payment']);*/
  console.log("in else of buy product")
  }
}

delete(cartid:number){
  this.userservice.deleteCartById(cartid).subscribe(data=>{
    console.log(data)
    if(data){
      this.CARTDETAIL()
    }
    else{
      this.popUp=true;
      this.message="Retry"
      this.error=true;
    }
  })
  setTimeout(()=>{this.popUp=false,this.error=false}, 1000);
}
/*
deleteItem(cartid:number,productid:number)
{
  this.userservice.deleteCartByItem(cartid,productid).subscribe(data=>
    {if(data)
    {
      console.log("Item Deleted");
      alert("Item Deleted");
    }
    else{
      this.message="Retry"
    }
  })
}*/


onAddUpdateClick(cartid:number)
{
  this.userservice.updateMyCart(cartid,1)
  .subscribe((data)=>
  {
    this.CARTDETAIL()
  });
}
onMinusUpdateClick(cartid:number)
{
  this.userservice.updateMyCart(cartid,-1)
  .subscribe((data)=>
  {
    this.CARTDETAIL()
  });
}


CARTDETAIL(){
  this.userservice.getMyCart(this.cartid).subscribe(data=>{
    this.cartMyDTO=data;
    console.log(data)
    this.totalPrice= 0;
    if(this.cartMyDTO.length!=0)
    this.status=true
    console.log(this.status)
    this.cartMyDTO.map((data: { productdto: { productquantity: number; productprice: number; }; cartdto: { quantity: number; }; })=>{
          if(data.productdto.productquantity!=0)
          this.totalPrice+=(data.cartdto.quantity*data.productdto.productprice)
      })
  })
}


removePopUp(){
 // this.router.navigate(['/home']);
}
}