import { useRouter } from "next/router"
import nome from "./[nome]"
export default function buscar(){
    const router =useRouter()
  
    const codigo= router.query.codigo
    return(<h1>rotas/{codigo}/{nome}</h1>)

    
}