import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlistid:number=1
  wishMyDTO:any;
  status:boolean=false;
  popUp:boolean=false;
  message:string=""
  error:boolean=false;
  constructor(private userservice: UserService ) { }

  ngOnInit(): void {

    
        this.WISHDETAIL()
   
    
  }
  WISHDETAIL(){
    this.userservice.getMyWishlist(this.wishlistid).subscribe(data=>{
      this.wishMyDTO=data;
      console.log(data)
      if(this.wishMyDTO.length!=0)
      this.status=true
      console.log(this.status)
    })
  }
  addToCartF(wishlist: { productdto: any; wishlistdto: any; }) {
      if(wishlist.productdto.productquantity!=0)
      {
        this.popUp=true;
        this.userservice.addToCartList(wishlist.wishlistdto.wishlistid,wishlist.productdto.productid).subscribe(data => {
          if (data==1)
            {
              this.message="Added";
              this.deleteF(wishlist);
            }
            else if(data==0)
            {
              this.message="Already in Cart";
              this.error=true;
            }
            else{
            this.message="Try Again";
            this.error=true;
            }
        })
      }
      else{
        this.message="Cannot be Added";
        this.error=true;
      }
     // setTimeout(()=>{this.popUp=false,this.error=false}, 1000);
    }
    deleteF(wishlist: { wishlistdto: { wishlistid: number; }; }){
      this.userservice.deletewishlistById(wishlist.wishlistdto.wishlistid).subscribe(data => {
        if (data==1)
          {
            this.WISHDETAIL()
          }
          else if(data==0)
          {
            this.message="Already";
          }
          else{
            this.message="Retry";
            this.error=true;
          }
      })
    //  setTimeout(()=>{this.popUp=false,this.error=false}, 1000);
    }
  
}