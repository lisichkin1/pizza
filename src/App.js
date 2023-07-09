import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaCard from './components/PizzaCard';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('https://64a9d0c38b9afaf4844b1769.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);
  return (
    <div className="wrapper">
      <main className="content">
        <div className="container">
          <section className="content__top"></section>
          <h2 className="content__title">Все пиццы</h2>
          <section className="content__items">
            {items.map((item) => {
              return <PizzaCard key={item.id} {...item} />;
            })}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
