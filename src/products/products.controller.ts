import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './product.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Product has been successfully created.',
  })
  create(@Body() productDto: ProductDto) {
    return this.productsService.insert(productDto.name, productDto.price);
  }

  @Get()
  getAll() {
    return this.productsService.getAll();
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return this.productsService.find(id);
  }
}
