import { Component } from '@angular/core';
import { InventoryEntry } from 'src/app/models/InventoryEntry.model';
import { Product } from 'src/app/models/Product.model';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  product: Omit<Product, 'id' | 'state' | 'quantity'> = {
    name: '',
    description: '',
    imageUrl: '',
  };

  inventory: Omit<InventoryEntry, 'id'> = {
    productId: 0,
    quantity: 0,
    expirationDate: '',
  };

  constructor(private productService: ProductService) {}

  onSubmit(): void {
    // Crear el producto
    this.productService.createProduct(this.product).subscribe({
      next: (createdProduct) => {
        this.inventory.productId = createdProduct.id; // Asociar ID del producto
        // Crear la entrada de inventario
        this.productService.createInventoryEntry(this.inventory).subscribe({
          next: () => {
            alert('Producto creado exitosamente con inventario');
            this.resetForm();
          },
          error: (err) => {
            console.error(err);
            alert('Error al crear la entrada de inventario');
          },
        });
      },
      error: (err) => {
        console.error(err);
        alert('Error al crear el producto');
      },
    });
  }

  resetForm(): void {
    this.product = {
      name: '',
      description: '',
      imageUrl: '',
    };
    this.inventory = {
      productId: 0,
      quantity: 0,
      expirationDate: '',
    };
  }
}