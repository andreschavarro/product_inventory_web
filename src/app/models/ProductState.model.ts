export interface ProductState {
    productId: number;
    productName: string;
    totalQuantity: number;
    state: 'Vigente' | 'Por vencer' | 'Vencido'; 
  }
  