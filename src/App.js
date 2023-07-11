import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <div className="container">
          <Home />
        </div>
      </main>
    </div>
  );
}

export default App;
