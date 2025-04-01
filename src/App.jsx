import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MenuNav from './components/MenuNav';
import NewsCatalog from './pages/NewsCatalog';
import Home from './pages/Home';
import News from './pages/News';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SearchBar />
      <MenuNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<News />} />
        <Route path="/thoi-su" element={<NewsCatalog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;