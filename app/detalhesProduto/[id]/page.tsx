

import ListaDetalheProduto from "@/components/ListaDetalheProduto"
import { log } from "console"


const  page = async({params}:{params:any}) => {
        const id = await params.id
   



  return (
    <main>
      <ListaDetalheProduto id={id}/>

    </main>
  )
}

export default page
