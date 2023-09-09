import '../../App.css';
import FruitForm from '../../component/FruitForm';
import FruitList from '../../component/FruitList';
import Layout from '../../container';

function Fruits() {
  return (
    <header className="App-header">
      <FruitForm />
      <FruitList />
    </header>
  );
}

const fruitPage = () => (
  <Layout>
    <Fruits />
  </Layout>
);

export default fruitPage;
