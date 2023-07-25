import React from 'react';
import { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaCard from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });
  useEffect(() => {
    setIsLoading(true);
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    fetch(
      `https://64a9d0c38b9afaf4844b1769.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [categoryId, sortType]);
  return (
    <>
      <section className="content__top">
        <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
        <Sort type={sortType} onClickSort={(id) => setSortType(id)} />
      </section>
      <h2 className="content__title">Все пиццы</h2>
      <section className="content__items">
        {isLoading
          ? [...new Array(30)].map((_, index) => <Skeleton key={index} />)
          : items.map((item) => <PizzaCard key={item.id} {...item} />)}
      </section>
    </>
  );
}

export default Home;
