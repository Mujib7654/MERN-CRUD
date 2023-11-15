import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CreateBooks from './components/CreateBooks';
import AllBook from './components/AllBook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateBooks />}/>
        <Route path="/books" element={<AllBook />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
