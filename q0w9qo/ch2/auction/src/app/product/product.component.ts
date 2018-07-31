import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  private imgUrl = 'http://via.placeholder.com/200x150';


  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1,"1st Product", 1.99, 1.5, "This is the 1st product desc", ["Electronics", "Hardware"]),
      new Product(2,"2nd Product", 2.99, 2.5, "This is the 2nd product desc", ["Electronics"]),
      new Product(3,"3rd Product", 3.99, 3.5, "This is the 3rd product desc", [ "Hardware"]),
      new Product(4,"4th Product", 4.99, 4.5, "This is the 4th product desc", [ "Hardware"]),
      new Product(5,"5th Product", 5.99, 5.0, "This is the 5th product desc", ["Electronics", "Hardware", "Toy"])


    ];
  }

}

export class Product {
  constructor(    public id:number,
                  public title:string,
                  public price:number,
                  public rating:number,
                  public desc:string,
                  public categories:Array<string>){


  }

}
