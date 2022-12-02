import logo from './logo.svg';
import './App.css';
import { MainS } from './styles/Main';
import Index from './pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
      <MainS>
          <Index />
      </MainS>
    </BrowserRouter>
  );
}

export default App;
