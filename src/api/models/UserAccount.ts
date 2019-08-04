import * as bcrypt from 'bcrypt';
import { IsNotEmpty } from 'class-validator';
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn } from 'typeorm';

import { Logger } from '../../lib/logger';

const log = new Logger(__filename);

@Entity()
export class UserAccount {

    public static hashPassword(password: string): Promise<string> {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) {
                    return reject(err);
                }
                resolve(hash);
            });
        });
    }

    public static comparePassword(user: UserAccount, password: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            log.info('password => ', password);
            bcrypt.compare(password, user.password, (err, res) => {
                resolve(res === true);
            });
        });
    }

    @PrimaryColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column()
    public username: string;

    @IsNotEmpty()
    @Column({ name: 'first_name' })
    public firstName: string;

    @IsNotEmpty()
    @Column({ name: 'last_name' })
    public lastName: string;

    @IsNotEmpty()
    @Column()
    public email: string;

    @IsNotEmpty()
    @Column()
    public password: string;

    @IsNotEmpty()
    @Column({ name: 'create_date', type: 'timestamp'  })
    public createdAt: Date;

    @IsNotEmpty()
    @Column({ name: 'update_date', type: 'timestamp' })
    public updatedAt: Date;

    public toString(): string {
        return `${this.firstName} ${this.lastName} (${this.email})`;
    }

    @BeforeInsert()
    public async beforeInsert(): Promise<void> {
        this.password = await UserAccount.hashPassword(this.password);
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    @BeforeUpdate()
    public async beforeUpdate(): Promise<void> {
        this.updatedAt = new Date();
    }

}
