import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {

  @Input() product!: Product;

  // Método para asignar clases según el estado
  getStatusClass(state: string): string {
    switch (state) {
      case 'Vigente':
        return 'status-vigente';
      case 'Por vencer':
        return 'status-por-vencer';
      case 'Vencido':
        return 'status-vencido';
      default:
        return 'status-default';
    }
  }

}
