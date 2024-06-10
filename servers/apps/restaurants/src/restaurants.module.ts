import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../../prisma/Prisma.service';
import { EmailModule } from './email/email.module';
import { RestaurantService } from './restaurants.service';
import { RestaurantResolver } from './restaurants.resolver';
import { FoodsService } from './foods/foods.service';
import { FoodsResolver } from './foods/foods.resolver';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { CloudinaryService } from './cloudinary/cloudinary.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    EmailModule,
    CloudinaryModule,
  ],
  controllers: [],
  providers: [
    RestaurantService,
    ConfigService,
    JwtService,
    PrismaService,
    RestaurantResolver,
    FoodsService,
    FoodsResolver,
    CloudinaryService,
  ],
})
export class restaurantModule {}
