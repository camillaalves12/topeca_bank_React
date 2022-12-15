import './about.css';
import Header from '../../componentes/header/Header';
import Logo from '../../imagens/logo.png';


export default function About() {
   return(
      <>
         <Header />

         <div className="container1">
            <div className="containerItensAbout">
               <div className="containerItensText">
                     <p className="textSobre">
                        O <strong>TopekaBank</strong> é uma fintech brasileira que surgiu
                        através de um projeto em sala de aula numa disciplina de Programação
                        Web do curso de Sistemas de Informação, a empresa têm como seu
                        principal serviço uma conversão monetária totalmente sem taxa, e
                        ganhou mais notoriedade por conta de seus serviços inovadores que
                        buscam simplificar a organização da vida financeira do brasileiro, e
                        além disso, a empresa têm um foco grande nos estudantes de todo o
                        Brasil, e esse foco vêm justamente do fato de que o TopekaBank
                        surgiu através de estudantes de uma universidade pública do estado
                        de Alagoas.
                     </p>
                     <p className="textSobre">
                        Além do serviço de conversação monetária, a empresa oferece serviços
                        como cartão de crédito e débito, transferências internacionais sem
                        taxa, empréstimos, seguros e outros serviços. Já com o foco nos
                        estudantes, o TopekaBank oferece consórcio estudantil, financiamento
                        em pós-graduação, programas de apoio aos universitários para
                        ajudá-los ingressar no mercado de trabalho, saques gratuitos e
                        ilimitados e outros serviços!
                     </p>
               </div>
               <img className='imgLogo' src={Logo} alt="Logo Topeka Bank"/>

            </div>
         </div>

      </>
   )
}

