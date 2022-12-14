import './header.css';
import { Link } from "react-router-dom"

export default function Header() {
   return (
      <div className="headerNav">
           <Link to="/">
               <p  className="logoNav" >Topeka Bank</p>
            </Link>
         <nav class="NavItens">
            <Link to="/login">
               <p  className=" navItensItem">Entrar</p> 
            </Link>
            <Link to="/account">
               <p  className=" navItensItem">Abra a sua conta</p>
            </Link>
            <Link to="/about">
               <p  className=" navItensItem">Sobre Nós</p>
            </Link>
            <Link to="/help">
               <p  className="navItensItem">Ajuda</p>
            </Link>
         </nav>
      </div>
   )
}
