import { useEffect, useState } from 'react';
import './App.css';
import Clase from './components/Clase';

const SuperForm = (props) => {
  return <>
    <h1>{props.titulo} todo piola en {props.curso}</h1>
    {props.pepa({textoBoton: "bring me one one five"})}
    {props.linea()}
  </>
}

const SuperButton = ({textoBoton}) => {
  const HacerClick = () => {
    alert(textoBoton);
  }

  return <>
    <input type="button" value="clickeame" onClick={HacerClick} />
  </>
}

const Linea = () => {
  return <>
    <hr />
  </>
}

const Contador = () => {
  const [clicks, setClicks] = useState(0);
  const [fecha, setFecha] = useState(new Date());
  useEffect(()=> {
    console.log("2")
    return(()=> {
      console.log("3")
    })
  }, [])
  console.log("1")
  return<>
    <p onClick={() => {
    setClicks(clicks + 1);
    setFecha(new Date());
    }}>Clicks: {clicks} - Fecha: {fecha.getDate()}/{fecha.getMonth() + 1}/{fecha.getFullYear()} 
    -{fecha.getHours()}:{fecha.getMinutes()}:{fecha.getSeconds()}</p>
  </>
}

function App() {
  const [lugar, setLugar] = useState("limalaya");
  const [como, setComo] = useState("terrible");

  return <>
    <SuperForm titulo="hola" curso="react" pepa={SuperButton} linea={Linea}>
      <SuperButton />
    </SuperForm>
    <Clase />
    <h1 onClick={()=>{setLugar("planetavegeta777"); setComo("de mierda")}}>Bienvenidos al {lugar} {como}</h1>
    <Contador />
  </>
}

export default App;
