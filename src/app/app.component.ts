import { Component } from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Zapatos para correr Negros - Nike Revolution 5',
        'assets/images/products/black-shoes.jpg',
        ['Hombres', 'Zapatos', 'Zapatos para correr'],
        109.99
      ),
      new Product(
        'NEATOJACKET',
        'Chaqueta azul - Adidas Hip',
        'assets/images/products/blue-jacket.jpg',
        ['Mujeres', 'Vestimenta', 'Chaquetas y chalecos'],
        238.99
      ),
      new Product(
        'ORANGESHOES',
        'Neon Orange - Balenciaga Speed 2.0',
        'assets/images/products/orange-shoes.jpg',
        ['Mujeres', 'Zapatos', 'Zapatos para correr'],
        459.99
      ),
      new Product(
        'NICEHAT',
        'Gorra Negra - Adidas Golf Performance',
        'assets/images/products/black-hat.jpg',
        ['Hombres', 'Accesorios', 'Gorras'],
        29.99
      )
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
