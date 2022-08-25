import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Input from './components/Input';
import Item from './components/Item';
import Title from './components/Title';

function App() {
  const lista = ["Desarrollo web", "Javascript", "React"];
  const items = lista.map(items => (
    <Item valor={items} />
  ));
  return <>
  <Header titulo="Codereado" />
  <Title valor="Cursos" />
  <ul>
    {items}
  </ul>
  <Title valor="Formulario" />
  <Input valor="Nombre" />
  <Input valor="Apellido" />
  <Footer copy="Todos los derechos bien puestos" />
  </>
}

export default App;
