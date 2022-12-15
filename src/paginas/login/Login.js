import './login.css'
import { Link } from 'react-router-dom'

export default function Login() {
   return(
      <>
        <body className="bodyLogin">
               <div className="containerLogin">
                  <div className="titleLogin">
                     <Link to="/">
                        <p className="titleLogin"><p>TopekaBank</p></p>
                     </Link>
                  </div>
            
                  <div className="login">
                     <form className="loginForm">
                        <input className="inputsLogin" type="text" placeholder="Usuário"/>
                        <input className="inputsLogin" type="password" placeholder="Senha"/>
               
                        <button className="btnEntrar">Entrar</button>
                     </form>

                     <Link to='../account'>
                     <p className="message">Ainda não tem conta? <span className='messageP'>Crie aqui!</span></p>
                     </Link>
                  </div>
               </div>

         </body>
      </>
   )
}

