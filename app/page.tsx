import CatalogoProdutos from '@/components/CatalogoProdutos' //import component customizado

// página principal com cataloo dos produtos
export default function Home() {
    return (
        <main className="grid justify-center w-full text-center">
            <h1 className="text-5xl font-extrabold  mt-6">
                Catálogo de Produtos
            </h1>
            <CatalogoProdutos />
        </main>
    )
}
