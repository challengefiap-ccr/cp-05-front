import { ProdutosProp } from './ProdutosInterface'

// tipagem para o produto em página detalhes
export interface ProdutoDetalhe extends ProdutosProp {
    category: string
    brand: string
    description: string
    rating: number
}
