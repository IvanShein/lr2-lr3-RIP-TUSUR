import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  const authorName = "Иван Шеин";
  return (
    <div className="page">
      <Header name={authorName} />
      <Main />
      <Footer name={authorName} />
    </div>
  );
}

export default App;
