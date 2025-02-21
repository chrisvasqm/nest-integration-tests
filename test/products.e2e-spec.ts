import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ProductsModule } from '../src/products/products.module';
import { Server } from 'http';
import * as request from 'supertest';
import { Product } from '../src/products/product.model';

describe('ProductsService', () => {
  let app: INestApplication;
  let server: Server;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ProductsModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
    server = app.getHttpServer() as Server;
  });

  afterAll(async () => {
    await app.close();
  });

  describe('GET /products', () => {
    it('should return an array', async () => {
      const response = await request(server).get('/products');

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });

  describe('POST /products', () => {
    it('should add a product', async () => {
      const product = {
        name: 'Product A',
        price: 9.99,
      };

      const postResponse = await request(server)
        .post('/products')
        .send(product);

      expect(postResponse.status).toBe(201);
      expect(postResponse.body).toHaveProperty('id');
      expect(postResponse.body).toMatchObject(product);

      const getResponse = await request(server).get('/products');

      expect(getResponse.status).toBe(200);
      const products = getResponse.body as Array<Product>;
      expect(products.length).toBe(1);
    });
  });
});
