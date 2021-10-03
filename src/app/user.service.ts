import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl="http://localhost:8087/MyKart/rest";
  constructor(private http:HttpClient) { }


  getUserbyAddress(userid:number)
  {
    return this.http.get(this.baseUrl+"/getAddress/"+userid); 
  }
  getUserbyid(userid:number)
  {
    return this.http.get(this.baseUrl+"/getuserbyid/"+userid);
  }
  addToCartList(cartid: number, productid: number)
  {
    //let cart=new Cart();
    return this.http.get(this.baseUrl+"/cartdetails/"+cartid+"/"+productid)
  }

  deleteCartById(cId:number){
    return this.http.delete(this.baseUrl+"/cartdetailsD/"+cId);
  }
  
  
  getMyCart(cartid: number)  /*Observable<CartMyDTO[]>*/
  { 
    console.log(cartid)
    return this.http.get(this.baseUrl+'/getCart/'+ cartid);
  }
  
  
  updateMyCart(cartid: number,addOrMinus:number)
  {
   
      return this.http.get(this.baseUrl+"/cartdetailsUpdate/"+cartid+"/"+addOrMinus);
  } 

   
  deleteCartByItem(cartid:number,productid:number)
  {
    return this.http.delete(this.baseUrl+"/cartdetailsDelete/"+cartid+"/"+productid)
  }


  addToWishList(wishlistid: number, productid: number)
  {
   
     return this.http.get(this.baseUrl+"/cartdetails/"+wishlistid+"/"+productid);
  }
   
   getMyWishlist(wishlistid : number)
  {
   
    return this.http.get(this.baseUrl+"/getWishlist/"+wishlistid);
  }

 
  

  deletewishlistById(wishlistid:number){
    return this.http.get(this.baseUrl+"/wishlistdetailsD/"+wishlistid);
  }
}
