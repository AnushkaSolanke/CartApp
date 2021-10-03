import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {

  constructor(private prodservice:ProductService) { }
  productArray:any;
  
  

  ngOnInit(): void {
    this.prodservice.getAllProds().subscribe
    (
      (data: any)=>{
            console.log(data);
            this.productArray=data;
            console.log(this.productArray);
      },
      (error: any)=>
      {
          console.log(error);
      }
    )
}


  }


