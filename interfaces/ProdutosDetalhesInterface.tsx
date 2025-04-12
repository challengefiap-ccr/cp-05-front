import { ProdutosProp } from "./ProdutosInterface";

export interface ProdutoDetalhe extends ProdutosProp{

    category: string
    brand:string
    description:string
    length:number

}