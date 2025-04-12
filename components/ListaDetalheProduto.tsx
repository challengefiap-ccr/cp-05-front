'use client'
import { ProdutoDetalhe } from '@/interfaces/ProdutosDetalhesInterface'
import axios from 'axios'

import React, { useEffect, useState } from 'react'

const ListaDetalheProduto = (prop:any) => {
    const [produtoDetalhe, setProdutoDetalhe] = useState<ProdutoDetalhe[]>([])


    
    

    useEffect(() =>{

        const buscarAPI = async ()=>{
            const resposta = await axios(`https://dummyjson.com/products/${prop.id}`)

           
                setProdutoDetalhe(resposta.data);
          
        }

        buscarAPI()
    },[])


        
        const {id,brand,category,description,images,price,title}:ProdutoDetalhe[]=produtoDetalhe
        

    return <article>    {!produtoDetalhe.length?     
      <>
      <figure>

                <img src={images} alt={title} />
            </figure>
    
            <div>
                <h2>{title}</h2>
                <p>{brand}</p>
                <h2>{category}</h2>
                <h2>{price}</h2>
                <h2>{description}</h2>
            </div>
            
            </>:<h1>CARREGANDO...</h1>
        }
    
  </article>

}

export default ListaDetalheProduto
