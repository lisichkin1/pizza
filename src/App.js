import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaCard from './components/PizzaCard';

function App() {
  return (
    <div class="wrapper">
      <Header />
      <main class="content">
        <div class="container">
          <section class="content__top">
            <Categories />
            <Sort />
          </section>
          <h2 class="content__title">Все пиццы</h2>
          <section class="content__items">
            <PizzaCard title="Мексиканская" price={350} />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
