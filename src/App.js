import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import HomePage from './pages/home';
import CalculatorPage from './pages/calculator';
import QuotesPage from './pages/quotes';
import ErrorPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="quotes" element={<QuotesPage />} />
          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="*" errorElement={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
