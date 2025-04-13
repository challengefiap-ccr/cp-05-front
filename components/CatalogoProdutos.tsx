'use client'

//imports para buscar, controlar estado, tipagem de API, componente customizado

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ListaProdutos from './ListaProdutos'
import { ProdutosProp } from '@/interfaces/ProdutosInterface'

const CatalogoProdutos = () => {
    const [produtos, setProdutos] = useState<ProdutosProp[]>([])

    // Buscar produtos para o catálogo
    useEffect(() => {
        const buscarAPI = async () => {
            const resposta = await axios('https://dummyjson.com/products')

            setProdutos(resposta.data?.products)
        }

        buscarAPI()
    }, [])

    return (
        <ul className="grid grid-cols-4 gap-4 w-full justify-center p-4 text-center">
            {produtos.length ? (
                produtos.map((produto: ProdutosProp) => {
                    return <ListaProdutos key={produto.id} {...produto} />
                })
            ) : (
                <h2 className="font-extrabold text-4xl">CARREGANDO...</h2>
            )}
        </ul>
    )
}

export default CatalogoProdutos
