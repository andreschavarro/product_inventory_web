import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../constants/endpoitn';
import { Product } from '../models/Product.model';
import { InventoryEntry } from '../models/InventoryEntry.model';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly BASE_URL = API_URL.base_url; // Base URL

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}${API_URL.products}`);
  }


    getProductById(id: number): Observable<Product> {
      const url = `${this.BASE_URL}${API_URL.product.replace(':id', id.toString())}`;
      return this.http.get<Product>(url);
    }
  

    // createProduct(product: Product): Observable<Product> {
    //   return this.http.post<Product>(`${this.BASE_URL}${API_URL.products}`, product);
    // }

    createProduct(product: Omit<Product, 'id' | 'state' | 'quantity'>): Observable<Product> {
      return this.http.post<Product>(`${this.BASE_URL}${API_URL.products}`, product);
    }
    
    createInventoryEntry(entry: Omit<InventoryEntry, 'id'>): Observable<InventoryEntry> {
      return this.http.post<InventoryEntry>(`${this.BASE_URL}${API_URL.products}/inventory/entries`, entry);
    }
    
    
}
