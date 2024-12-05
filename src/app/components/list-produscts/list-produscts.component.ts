import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-produscts',
  templateUrl: './list-produscts.component.html',
  styleUrls: ['./list-produscts.component.css'],
})
export class ListProdusctsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.GetProducts();
  }

  GetProducts(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }
}
