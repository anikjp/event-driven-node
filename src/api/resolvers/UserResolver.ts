import { FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { Service } from 'typedi';

import { User as UserModel } from '../models/User';
import { UserService } from '../services/UserService';
import { User } from '../types/User';

@Service()
@Resolver(of => User)
export class UserResolver {

    constructor(
        private userService: UserService
        ) {}

    @Query(returns => [User])
    public users(): Promise<any> {
      return this.userService.find();
    }

    @FieldResolver()
    public async pets(@Root() user: UserModel): Promise<any> {
        return {};
    }

}
