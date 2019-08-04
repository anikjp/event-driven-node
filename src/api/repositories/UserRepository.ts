import { EntityRepository, Repository } from 'typeorm';

import { UserAccount } from '../models/UserAccount';

@EntityRepository(UserAccount)
export class UserRepository extends Repository<UserAccount>  {

}
