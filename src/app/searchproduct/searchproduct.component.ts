import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent implements OnInit {
  productArray:any;
  srchkeyword:string="";

  constructor(private prodservice:ProductService) { }

  ngOnInit(): void {

  }

  searchByName()
  {
    console.log("Srch String "+this.srchkeyword);
      this.prodservice.searchProduct(this.srchkeyword).subscribe
      (
        (data)=>{
          console.log(data);
            this.productArray=data;
        },
        (error)=>
        {
          console.log(error);
        }
      )

    
  }

  lowtohigh_()
  {
      this.prodservice.lowtohighfilter_(this.srchkeyword).subscribe
      (
        (data)=>{
          console.log(data);
            this.productArray=data;
        },
        (error: any)=>
        {
          console.log(error);
        }
      )

  }

  hightolow_()
  {
      this.prodservice.hightolowfilter_(this.srchkeyword).subscribe
      (
        (data)=>{
          console.log(data);
            this.productArray=data;
        },
        (error: any)=>
        {
          console.log(error);
        }
      )

      console.log("Shivam");


  }

}

