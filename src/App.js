import StyleGlobal from './styleGlobal.css'
import Initial from './paginas/initial/Inicial';
import Login from './paginas/login/Login';
import About from './paginas/about/About';
import Account from './paginas/account/Account';
import Help from './paginas/help/Help';

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
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/account' element={<Account />}/>
        <Route exact path='/about' element={<About />}/>
        <Route exact path='/help' element={<Help />}/>
      </Routes>
    </Router>



    </>
  );
}

export default App;
