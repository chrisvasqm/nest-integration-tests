import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [{ id: 1, name: 'Product A', price: 9.99 }];

  insert(name: string, price: number) {
    const product = new Product(this.products.length + 1, name, price);
    this.products.push(product);
    return product;
  }

  getAll() {
    return this.products;
  }

  find(id: string) {
    const product = this.products.find((p) => p.id === parseInt(id, 10));
    if (!product) throw new NotFoundException();

    return product;
  }
}
