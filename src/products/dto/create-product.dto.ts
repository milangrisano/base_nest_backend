import { IsArray, IsIn, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateProductDto {

    
    @IsString()
    @MinLength(1)
    product: string;
    
    @IsString()
    @IsOptional()
    description?: string;
    
    @IsIn(['Personal', 'Mediana', 'Grande', 'Unico', '400ml', '500ml'], { each: true })
    size?: string[];
    
    @IsNumber()
    @IsPositive()
    @IsOptional() 
    price?: number;
    
    inventoriable: boolean;
}
