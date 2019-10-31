import { Column, Entity, PrimaryColumn } from 'typeorm';


@Entity()
export class District {

    @PrimaryColumn('uuid')
    public id: string;

    @Column({ name: 'code' })
    public roleType: string;

}
