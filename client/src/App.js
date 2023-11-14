import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CreateBooks from './components/CreateBooks';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateBooks />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
