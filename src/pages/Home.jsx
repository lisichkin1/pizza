import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaCard from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Popup from '../components/PopupCard';
import { AppContext } from '../App';
import Pagination from '../components/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
import axios from 'axios';

function Home() {
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filterSlice);
  const sortType = sort.sortProperty;
  const { searchValue } = useContext(AppContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPizza, setSelectedPizza] = useState('');
  const [modalActive, setModalActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    setIsLoading(true);
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    axios
      .get(
        `https://64a9d0c38b9afaf4844b1769.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [categoryId, sortType, currentPage]);
  const skeletons = [...new Array(30)].map((_, index) => <Skeleton key={index} />);
  const handlePizzaClick = (pizza) => {
    setSelectedPizza(pizza);
    setModalActive(true);
  };
  const pizzas = items
    .filter((item) => {
      if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((item) => (
      <PizzaCard key={item.id} {...item} onClickCard={() => handlePizzaClick(item)} />
    ));
  return (
    <>
      <section className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </section>
      <h2 className="content__title">Все пиццы</h2>
      <section className="content__items">{isLoading ? skeletons : pizzas}</section>
      {selectedPizza && (
        <Popup {...selectedPizza} modalActive={modalActive} setModalActive={setModalActive} />
      )}
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
}

export default Home;
