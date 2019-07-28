import {
    Authorized, Body, Delete, Get, JsonController, OnUndefined, Param, Post, Put, Req
} from 'routing-controllers';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { UserNotFoundError } from '../errors/UserNotFoundError';
import { User } from '../models/User';
import { UserService } from '../services/UserService';

@JsonController('/users')
export class UserController {

    constructor(
        private userService: UserService,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    @Authorized()
    @Get()
    public find(): Promise<User[]> {
        return this.userService.find();
    }

    @Authorized()
    @Get('/me')
    public findMe(@Req() req: any): Promise<User[]> {
        return req.user;
    }

    @Authorized()
    @Get('/:id')
    @OnUndefined(UserNotFoundError)
    public one(@Param('id') id: string): Promise<User | undefined> {
        this.log.info('Create a new id => ', id);
        return this.userService.findOne(id);
    }

    @Post()
    public create(@Body() user: User): Promise<User> {
        this.log.info('Create a new user => ', user);
        return this.userService.create(user);
    }

    @Authorized()
    @Put('/:id')
    public update(@Param('id') id: string, @Body() user: User): Promise<User> {
        return this.userService.update(id, user);
    }

    @Authorized()
    @Delete('/:id')
    public delete(@Param('id') id: string): Promise<void> {
        return this.userService.delete(id);
    }

}
