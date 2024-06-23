import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Order from './order';
import './App.css';
import Home from './home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='order' element={<Order/>}/>
          </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
