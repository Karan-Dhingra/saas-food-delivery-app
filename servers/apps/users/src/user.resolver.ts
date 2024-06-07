import { BadRequestException } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { ActivationReponse, RegisterReponse } from './types/user.types';
import { RegisterDto, ActivationDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import { Response } from 'express';

@Resolver('User')
// @UseFilters()
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => RegisterReponse)
  async register(
    @Args('registerDto') registerDto: RegisterDto,
    @Context() context: { res: Response },
  ): Promise<RegisterReponse> {
    if (!registerDto.name || !registerDto.email || !registerDto.password) {
      throw new BadRequestException('Please fill all fields');
    }

    const { activation_token } = await this.userService.register(
      registerDto,
      context.res,
    );

    return { activation_token };
  }

  @Mutation(() => ActivationReponse)
  async activateUser(
    @Args('activationDto') activationDto: ActivationDto,
    @Context() context: { res: Response },
  ): Promise<ActivationReponse> {
    return await this.userService.activateUser(activationDto, context.res);
  }

  @Query(() => [User])
  async getUsers() {
    return this.userService.getUsers();
  }
}
