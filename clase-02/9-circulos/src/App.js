import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  console.log(new Set([1,2,3,4,2,3,4,5,6,7,8,8,7]));
  const productos = [
    {id: 1, nombre: "Coca", precio: 1200},
    {id: 2, nombre: "Achunchi", precio: 200},
    {id: 3, nombre: "Caca", precio: 100},
    {id: 4, nombre: "Cod", precio: 300}
  ]
  return (
    <>
      <Header />
      <h3>ASEREJE JA DEJE DEJEJTUERJOEFSDFANSJ</h3>
      <h2>Productos</h2>
      {
        productos.map(item => (
          <li key={item.id}>{item.nombre} - precio: ${item.precio}</li>
        ))
      }
      <Footer />
    </>
  );
}

export default App;
