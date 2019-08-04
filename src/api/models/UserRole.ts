import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class UserRole {

    @PrimaryColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column({ name: 'role_type' })
    public roleType: number;

    @IsNotEmpty()
    @Column({ name: 'role_name' })
    public roleName: string;

}
