import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Retailer } from './retailer';
import { Tempproduct } from './tempproduct';

@Injectable({
  providedIn: 'root'
})
export class RetailerService {

  
  baseUrl="http://localhost:8087/MyKart/rest";

  tempprodArray=new Array<Tempproduct>()
  retailerArray=new Array<Retailer>()
  constructor(private http:HttpClient) { }
 
  addProductByRetailer(product:Product)
  {
     return this.http.post(this.baseUrl+"/addproductsbyretailer",product);
  }

  showproductstatus()
  {
     return this.http.get(this.baseUrl+"/productstatus");
  }
  

}
