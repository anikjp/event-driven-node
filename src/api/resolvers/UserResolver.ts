import { FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { Service } from 'typedi';

import { UserAccount as UserModel } from '../models/UserAccount';
import { UserService } from '../services/UserService';
import { UserAccount } from '../types/User';

@Service()
@Resolver(of => UserAccount)
export class UserResolver {

    constructor(
        private userService: UserService
        ) {}

    @Query(returns => [UserAccount])
    public users(): Promise<any> {
      return this.userService.find();
    }

    @FieldResolver()
    public async pets(@Root() user: UserModel): Promise<any> {
        return {};
    }

}
