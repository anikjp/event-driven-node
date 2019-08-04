import { EventSubscriber, On } from 'event-dispatch';

import { Logger } from '../../lib/logger';
import { UserAccount } from '../models/UserAccount';
import { events } from './events';

const log = new Logger(__filename);

@EventSubscriber()
export class UserEventSubscriber {

    @On(events.user.created)
    public onUserCreate(user: UserAccount): void {
        log.info('User ' + user.toString() + ' created!');
    }

}
