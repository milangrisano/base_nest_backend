import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        unique: true,
    })
    product: string;

    @Column('text')
    description: string;

    @Column('text',{
        array: true,
    })
    size: string[];

    @Column('float',{
        default: 0,
    })
    price: number;

    @Column('boolean',{
        default: true,
    })
    inventoriable: boolean;

    
}
