import {
    Get, JsonController
} from 'routing-controllers';
import { Logger, LoggerInterface } from '../../decorators/Logger';

@JsonController('/')
export class TopController {

    constructor(@Logger(__filename) private log: LoggerInterface) {

    }

    @Get()
    public find(): any {
        this.log.info('calling');
        return {
            response: "ok",
        };
    }

}


