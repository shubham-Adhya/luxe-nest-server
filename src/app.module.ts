import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CategoryModule } from './category/category.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [UsersModule, ProductModule, OrderModule, CategoryModule, CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
