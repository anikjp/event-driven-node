import { EventSubscriber, On } from 'event-dispatch';
import { Logger } from '../../lib/logger';
import { UserAccount } from '../models/UserAccount';
import { events } from './events';
import fetch from 'node-fetch';

const log = new Logger(__filename);

@EventSubscriber()
export class UserEventSubscriber {

    @On(events.user.created)
    public onUserCreate(user: UserAccount): void {
        log.info('User ' + user.toString() + ' created!');
    }

    @On(events.user.search)
    public onUserSearch(id: string): void {
        setTimeout(async () => {
            const response = await fetch('http://localhost:8090?statusCode=500');
            const json = await response.json();
            log.error(JSON.stringify(json));
        }, 2000);
    }

}
