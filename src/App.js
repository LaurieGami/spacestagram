import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';

import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={HomePage} />
    </BrowserRouter>
  );
}

export default App;
