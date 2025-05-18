import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MenuNav from './components/MenuNav';
import NewsCatalog from './pages/NewsCatalog';
import Home from './pages/Home';
import News from './pages/News';
import './App.css';
import Login from './pages/Login';
import SearchResults from './pages/SearchResult';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SearchBar />
      <MenuNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tin/:id" element={<News />} />
        <Route path="/loai-tin/:id" element={<NewsCatalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search/:keySearch" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;