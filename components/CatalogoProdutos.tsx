'use client'

import axios from 'axios'

import React, { useEffect, useState } from 'react'
import ListaProdutos from './ListaProdutos'
import { ProdutosProp } from '@/interfaces/ProdutosInterface'





const CatalogoProdutos = () => {

    const [produtos, setProdutos] = useState<ProdutosProp[]>([])

    useEffect(() =>{

        const buscarAPI = async ()=>{
            const resposta = await axios('https://dummyjson.com/products')

            setProdutos(resposta.data?.products)
        }


        buscarAPI()
    },[])


  return (
    <ul className='grid grid-cols-4 gap-4 w-full justify-center'>
      {produtos.length ?
      produtos.map((produto: ProdutosProp) =>{
        return <ListaProdutos key={produto.id} {...produto}/>
      })
      :<>Carregando...</>}
    

    </ul>
  )
}

export default CatalogoProdutos
