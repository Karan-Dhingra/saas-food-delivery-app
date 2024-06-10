import { Field, InputType } from '@nestjs/graphql';
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateFoodDto {
  @Field()
  @IsNotEmpty({ message: 'Food name is required.' })
  @IsString({ message: 'Food name must need to be one string.' })
  name: string;

  @Field()
  @IsNotEmpty({ message: 'Food description is required.' })
  @IsString({ message: 'Food description must need to be one string.' })
  description: string;

  @Field()
  @IsNotEmpty({ message: 'price is required.' })
  price: number;

  @Field()
  @IsNotEmpty({ message: 'estimated price is required.' })
  estimatedPrice: number;

  @Field()
  @IsNotEmpty({ message: 'Food category is required.' })
  @IsString({ message: 'Food category must need to be one string.' })
  category: string;

  @Field(() => [String])
  @IsArray({ message: 'Food category is required.' })
  @ArrayNotEmpty({ message: 'Food images must not be empty ' })
  images: string[];
}

@InputType()
export class DeleteFoodDto {
  @Field()
  @IsNotEmpty({ message: 'Food id is required.' })
  @IsString({ message: 'Food id must need to be one string.' })
  id: string;
}
