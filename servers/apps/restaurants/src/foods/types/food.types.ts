import { Field, ObjectType } from '@nestjs/graphql';
import { ErrorType } from '../../types/user.types';
import { Food } from '../entities/food.entities';
import { Foods } from '@prisma/client';

@ObjectType()
export class CreateFoodResponse {
  @Field()
  message: string;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}

@ObjectType()
export class LoggedInRestaurantFoodResponse {
  @Field(() => [Food], { nullable: true })
  foods: Foods;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}

@ObjectType()
export class DeleteFoodResponse {
  @Field()
  message: string;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}
