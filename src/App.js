import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaCard from './components/PizzaBlock/index';
import Skeleton from './components/PizzaBlock/Skeleton';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://64a9d0c38b9afaf4844b1769.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <div className="container">
          <section className="content__top">
            <Categories />
            <Sort />
          </section>
          <h2 className="content__title">Все пиццы</h2>
          <section className="content__items">
            {isLoading
              ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
              : items.map((item) => <PizzaCard key={item.id} {...item} />)}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
