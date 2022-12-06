import logo from './logo.svg';
import './App.css';
import { MainS } from './styles/Main';
import Index from './pages';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Gallery from './components/helpers/Gallery';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <MainS>  
        <Routes>
          <Route element={<Header />} >
            <Route path="/" element={<Index />} />
          </Route>
          <Route path="/servicio/:num" element={<Gallery />} />
        </Routes>
      </MainS>
    </BrowserRouter>
  );
}

export default App;
