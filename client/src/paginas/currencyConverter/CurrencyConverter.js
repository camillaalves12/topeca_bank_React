import Header from "../../componentes/header/Header"
import './currencyConverter.css'

export default function CurrencyConverter() {


         
      function ConverterDolar () {
         let valorReal = document.getElementById('inputValue').value;
         let USD = " USD"
         

         let valorDolar = valorReal *  0.1893;
  
         let valorDolarFixado = valorDolar.toFixed(2); 
         
         let resultado = document.getElementById("result");
         
         let resultadoFinal = valorDolarFixado
         
         resultado.innerHTML = resultadoFinal + USD;
         
         }


         function ConverterEuro () {
            let valorReal = document.getElementById('inputValue').value;
            let EUR = " EUR"; 
            
            let valorEuro = valorReal * 0.1944;
            
            let valorEuroFixado = valorEuro.toFixed(2);
            
            let resultado = document.getElementById("result");
            
            let resultadoFinal = valorEuroFixado 
            
            resultado.innerHTML = resultadoFinal + EUR;
            
            }




   return(
      <>
         <Header />

         <h1 className="titleConversor">Conversor de Moedas</h1>

         <div className="caixas">
         
            <div className="caixa1 caixa">

               <label className="labelCurrency" for="caixa1">Insira o valor a ser convertido</label>
               <input className="inputCurrency" type="number" id="inputValue" classNamess="input01" />
            </div>

            <div class="buttons">

                  <button className="btnConverter" id="btn" onClick= {ConverterDolar}>Converter em Dolar</button>
               <button className="btnConverter" id="btn" onClick={ConverterEuro}>Converter em Euro</button>
            </div>

            <div className="caixa2 caixa">

               <label className="labelCurrency"  for="caixa1">Valor convertido</label>
               <div className="result">
                  <p className="input01" id="result"></p>
                  <p></p>
               </div>
            </div>
      </div>

      </>
   )
}


   
   

   
   
