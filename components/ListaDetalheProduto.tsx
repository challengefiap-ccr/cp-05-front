'use client'
import { ProdutoDetalhe } from '@/interfaces/ProdutosDetalhesInterface'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

import React, { useEffect, useState } from 'react'

// componente customizado para produto em especifico detalhado
const ListaDetalheProduto = (prop: { id: string }) => {
    const [carregando, setCarregando] = useState(true)
    const [produtoDetalhe, setProdutoDetalhe] = useState<ProdutoDetalhe>(
        {} as ProdutoDetalhe
    )

    const { images, category, brand, description, price, title, rating } =
        produtoDetalhe

    useEffect(() => {
        const buscarAPI = async () => {
            const resposta = await axios(
                `https://dummyjson.com/products/${prop.id}`
            )

            setProdutoDetalhe(resposta.data)
            setCarregando(false)
        }

        buscarAPI()
    }, [])

    if (carregando)
        return <h2 className="font-extrabold text-4xl">CARREGANDO...</h2>

    return (
        <article className="bg-amber-100 text-center p-5 rounded-3xl w-2xl">
            <figure>
                {images?.length > 0 && (
                    <Image
                        src={images[0]}
                        alt={title}
                        width={300}
                        height={200}
                        className="mx-auto"
                    />
                )}
            </figure>
            <div>
                <h2 className="font-extrabold text-2xl">{title}</h2>
                <p className="text-2xl font-semibold">{brand}</p>
                <h3>
                    <span className="font-semibold">Categoria:</span> {category}
                </h3>
                <p>
                    <span className="font-semibold">Preço:</span> {price}
                </p>
                <p>
                    <span className="font-semibold">Avaliação:</span> {rating}/5
                </p>
                <p className="max-w-2xs mx-auto mt-6 mb-7">{description}</p>
            </div>

            <Link
                className="bg-purple-400 text-white font-bold text-2xl rounded-2xl p-2  hover:bg-purple-700 transition-all duration-300 cursor-pointer"
                href={'/'}
            >
                Voltar
            </Link>
        </article>
    )
}

export default ListaDetalheProduto
