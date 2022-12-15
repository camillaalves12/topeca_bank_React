import './bottomContainer.css'
import { Link } from 'react-router-dom'

export default function  BottomContainer(){
   return (
      <>
         <div className='container02'>
            
            <p className='titleContainer02'>Possuímos um serviço de conversão monetária totalmente sem taxas!</p>
            <p className='subTitleContainer02'>Utilize nosso conversor monetário para realizar uma simulação!</p>
            
            <Link to='/currencyConverter'>
               <p><button className='btnContainer02'>Conversor de Moedas</button></p>    
            </Link>
         </div> 
      </>
   )
}
