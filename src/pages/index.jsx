import Image from "next/image";
import { Inter } from "next/font/google";
import params from '../pages/rotas/[codigo]/params'
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";
export default function Home() {
  return (
   <>
   <div>
  <h1>
    rotas
    <ul>
      <li>
<Link href='../rotas/1212/params'>params</Link>
      </li>
    </ul>
  </h1>
   </div>
   </>
  );
}
//agora tem link aqui