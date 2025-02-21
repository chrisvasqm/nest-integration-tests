import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insert(name: string, price: number) {
    const product = new Product(this.products.length + 1, name, price);
    this.products.push(product);
    return product;
  }

  getAll() {
    return this.products;
  }
}
