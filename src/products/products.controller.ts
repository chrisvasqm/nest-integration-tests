import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(@Body('name') name: string, @Body('price') price: number): any {
    return this.productsService.insert(name, price);
  }

  @Get()
  getAllProducts() {
    return this.productsService.getAll();
  }
}
