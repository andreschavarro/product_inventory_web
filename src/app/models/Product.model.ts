export interface Product {
    id: number;
    name: string;
    description: string;
    imageUrl: string; 
    quantity: number;
    state: 'Vigente' | 'Por vencer' | 'Vencido';
  }
  