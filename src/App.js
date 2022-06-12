import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import BotoneraTB from './components/BotoneraTB';
import BotoneraRDF from './components/BotoneraRDF';

function App() {
  return (
    <div>
        <Routes> 
          <Route path='/' element = {<Home/>}/>        
          <Route path='/rdf' element = {<BotoneraRDF/>}/>
          <Route path='/tb' element = {<BotoneraTB/>}/>          
        </Routes>
    </div>
  );
}

export default App;