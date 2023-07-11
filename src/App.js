import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <div className="container">
          <NotFound />
        </div>
      </main>
    </div>
  );
}

export default App;
