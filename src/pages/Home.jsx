import React, { useContext, useRef } from 'react';
import { useEffect, useState } from 'react';
import { AppContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import Categories from '../components/Categories';
import Sort, { sortArr } from '../components/Sort';
import PizzaCard from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Popup from '../components/PopupCard';
import Pagination from '../components/Pagination';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const { categoryId, sort, currentPage } = useSelector((state) => state.filterSlice);
  const sortType = sort.sortProperty;
  const { searchValue } = useContext(AppContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPizza, setSelectedPizza] = useState('');
  const [modalActive, setModalActive] = useState(false);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const onChangePage = (num) => {
    dispatch(setCurrentPage(num));
  };
  const fetchPizzas = () => {
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
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortArr.find((obj) => obj.sortProperty === params.sortProperty);
      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (!isSearch.current) {
      fetchPizzas();
    }
    isSearch.current = false;
  }, [categoryId, sortType, currentPage, searchValue]);

  useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sort.sortProperty,
      categoryId,
      currentPage,
    });
    navigate(`?${queryString}`);
    console.log(queryString);
  }, [categoryId, sort.sortProperty, currentPage]);

  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
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
      <Pagination onChangePage={(number) => onChangePage(number)} />
    </>
  );
}

export default Home;
