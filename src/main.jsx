import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import MovieDetails from './pages/MovieDetails.jsx'
import { Footer } from './components/Footer.jsx'
import NotFound from './pages/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/' element={<App />} />
      <Route path='/movies/:imdbID' element={<MovieDetails />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
)
