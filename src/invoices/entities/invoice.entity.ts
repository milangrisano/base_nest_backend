import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Invoice {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',)
    shops: string;

    @Column({
        type: 'numeric',
        default: 0
    })
    total_invoice: number;

    @Column('text')
    account: string;

}
