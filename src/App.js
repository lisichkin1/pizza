import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaCard from './components/PizzaCard';
import pizzas from './assets/pizza.json';
function App() {
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
            {pizzas.map((item) => {
              return <PizzaCard key={item.id} {...item} />;
            })}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
