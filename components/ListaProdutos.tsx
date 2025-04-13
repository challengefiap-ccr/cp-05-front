import Image from 'next/image'
import React from 'react'
import { ProdutosProp } from '@/interfaces/ProdutosInterface'
import Link from 'next/link'

//componente customizado para o catalogo de produtos
const ListaProdutos = ({ id, price, images, title }: ProdutosProp) => {
    return (
        <li className="bg-gray-100 flex flex-col items-center rounded-2xl text-center p-4 shadow-2xl hover:scale-[1.05] transition-all duration-300">
            <figure className="m-auto">
                <Image src={images[0]} width={150} height={150} alt={title} />
            </figure>

            <div>
                <h2 className="font-bold">{title}</h2>
                <p>R$ {price.toFixed(2)}</p>
            </div>
            <Link
                className=" bg-blue-400 text-white hover:bg-blue-600 transition-all p-1 font-bold cursor-pointer rounded-md mt-4"
                href={`/detalhesProduto/${id}`}
            >
                Detalhes
            </Link>
        </li>
    )
}

export default ListaProdutos
