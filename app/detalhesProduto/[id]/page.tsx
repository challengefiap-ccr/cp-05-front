import ListaDetalheProduto from '@/components/ListaDetalheProduto'

//página com detalhes de um produto específico
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params

    return (
        <main className="flex justify-center items-center min-h-screen">
            <ListaDetalheProduto id={id} />
        </main>
    )
}

export default page
