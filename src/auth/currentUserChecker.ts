import { Action } from 'routing-controllers';
import { Connection } from 'typeorm';

import { UserAccount } from '../api/models/UserAccount';

export function currentUserChecker(connection: Connection): (action: Action) => Promise<UserAccount | undefined> {
    return async function innerCurrentUserChecker(action: Action): Promise<UserAccount | undefined> {
        return action.request.user;
    };
}
