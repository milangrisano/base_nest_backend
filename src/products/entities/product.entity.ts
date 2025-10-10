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

    
}
