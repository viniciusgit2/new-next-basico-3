import { useRouter } from "next/router"

export default function nome(){
    const router =useRouter()
  
    const nome= router.query.nome
    return(<h1>rotas/{nome}</h1>)

    
}