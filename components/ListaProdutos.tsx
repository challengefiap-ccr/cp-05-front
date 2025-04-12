import Image from 'next/image'
import React from 'react'
import { ProdutosProp } from '@/interfaces/ProdutosInterface'
import Link from 'next/link'


const ListaProdutos = ({id, price, images, title}:ProdutosProp) => {
  return (
    <li className='bg-gray-200 rounded-2xl text-center items-center'>
        <figure>

      <img src={images[0]} width={200} alt={title} className='mx-auto'/>
        </figure>

        <div>
            <h2 className='font-bold'>{title}</h2>
            <p>R$ {price.toFixed(2)}</p>
        </div>
        <Link className='bg-blue-400 hover:bg-blue-600 transition-all p-1 cursor-pointer rounded-md' href={`/detalhesProduto/${id}`}>Detalhes</Link>
    </li>
  )
}

export default ListaProdutos
