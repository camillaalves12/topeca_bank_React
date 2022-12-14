import Logo from '../../imagens/logo.png';
import  './container.css'
export default function Container() {
   return (
      <>
         <div className='container1'>
            <div className='containerItens'>
               <img className='imgLogo' src={Logo} alt="Logo Topeka Bank"/>
               <div className='containerItensText'>
                  <h1 className='title'>O que é o TopekaBank ? </h1>
                  <p className='textInicial'>
                        Nós somos uma fintech totalmente voltada para estudantes de todo Brasil. Nosso principal objetivo é, cada vez mais, oferecer produtos e serviços inovadores que ajudem a simplificar e organizar a vida financeira das pessoas, dando a elas mais liberdade de escolha.
                        Além de transferências internacionais sem taxas, nos oferecemos a você as mais diversas soluções, como cartão de crédito, conta digital, cartão de débito, empréstimos, seguros, entre outros. 
                  </p>
               </div>
            </div>
         </div>
      </>
   )

}

