import StyleGlobal from './styleGlobal.css';
import Initial from './paginas/initial/Initial';
import CurrencyConverter from "./paginas/currencyConverter/CurrencyConverter";
import Login from './paginas/login/Login';
import About from './paginas/about/About';
import Account from './paginas/account/Account';


import{
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom"



function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route exact path='/' element={<Initial />}/>
        <Route exact path='/currencyConverter' element={<CurrencyConverter />} />
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/account' element={<Account />}/>
        <Route exact path='/about' element={<About />}/>
      </Routes>
    </Router>


    </>
  );
}

export default App;
