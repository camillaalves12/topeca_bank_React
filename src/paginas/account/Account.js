import './account.css'
import { Link } from 'react-router-dom'
export default function Acconunt() {
   return(
      <>
          <section class="titleTopeka">
            <Link to='/'>
               <h1><p href="/index.html" class="titleContaTopeka">TopekaBank</p></h1>
            </Link>
         </section>
         <section className="bodyConta">
            <div className="containerCriarConta">
               <div className="criarConta">
                  <p className="titleConta">
                     Complete os campos ao lado para criar sua Conta e Cartão de crédito
                  </p>
                  <div className="criarContaForm">
                     <form action="" className="formCriarConta" autocomplete="off">
      
                        <input className="inputsConta" type="number" name="cpf" id="CPF" placeholder="CPF"  required/>
                        <input className="inputsConta" type="text" name="Name" id="Nome" placeholder="Nome" required />
                        <input className="inputsConta" type="number"  name="celular" id="Celular" placeholder="Celular" required />
                        <input className="inputsConta" type="email" name="email" id="Email" placeholder="Email"  required/>
            
                        <div className="checkLabel">
                           <input type="checkbox" id="termos" name="termos" required />
                           <label className="labelText" for="termos"
                           >Eu li, estou ciente das condições de tratamento dos meus dados
                           pessoais e dou meu consentimento, quando aplicável, conforme
                           descrito nesta <strong className="boldText">Política de Privacidade.</strong></label>
                        </div>
                        <button type="submit" className="btnEnviar">Enviar</button>
                     </form>
                  </div>
               </div>

            </div>
   </section>
      </>
   )
}

