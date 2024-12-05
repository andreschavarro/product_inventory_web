import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full' // Redirige a /home cuando se accede a la raíz
  },
  {
    path: 'home',
    component: PageHomeComponent,
  },
  {
    path: 'createProduct',
    component: CreateProductComponent,
  },
  {
    path: '**', // Ruta comodín para manejar 404
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
