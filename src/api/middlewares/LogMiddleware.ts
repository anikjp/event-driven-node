import * as express from 'express';
import morgan from 'morgan';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
import fs from 'fs';
import path from 'path';
import { env } from '../../env';

@Middleware({ type: 'before' })
export class LogMiddleware implements ExpressMiddlewareInterface {
    public use(req: express.Request, res: express.Response, next: express.NextFunction): any {
        var accessLogStream = fs.createWriteStream(path.join(__dirname, '../../../access.log'), { flags: 'a' })
        morgan.format(env.log.output, ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" - :response-time ms');
        return morgan(env.log.output, {
            stream: accessLogStream,
        })(req, res, next);
    }

}
