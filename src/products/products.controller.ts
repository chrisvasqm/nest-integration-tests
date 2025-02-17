import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body('name') name: string, @Body('price') price: number) {
    return this.productsService.insert(name, price);
  }

  @Get()
  getAll() {
    return this.productsService.getAll();
  }
}
