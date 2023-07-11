import React from 'react';
import { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaCard from '../components/PizzaBlock/index';
import Skeleton from '../components/PizzaBlock/Skeleton';

function Home() {
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
    <>
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
    </>
  );
}

export default Home;
