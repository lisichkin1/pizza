import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import { createContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/slices/filterSlice';

export const AppContext = createContext();
function App() {
  const [searchValue, setSearchValue] = useState('');
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="wrapper">
      <AppContext.Provider value={{ searchValue, setSearchValue }}>
        <div>
          <div>
            <button aria-label="Increment value" onClick={() => dispatch(increment())}>
              Increment
            </button>
            <span>{count}</span>
            <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
              Decrement
            </button>
          </div>
        </div>
        <Header />
        <main className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
