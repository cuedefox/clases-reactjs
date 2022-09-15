import React from "react";
import { useState } from "react";

const Select = ({opciones, onSelect, defaultOption}) => {
    return (
        <select onChange={(e) => {onSelect(e.target.value)}}>
            {
            opciones.map(opcion => (
                <option key={opcion.id} value={opcion.id} selected={(opcion.id == defaultOption) ? 'selected' : ''}>{opcion.valor}</option>
            )
            )}
        </select>
    );
}

const Abstraccion1 = () => {
    const [option, setOption] = useState(1);
    let valores = [{id:1, valor:"azul"}, {id:2, valor:"rojo"}, {id:3, valor:"verde"}];
    function onSelect (value) {
        setOption(value);
    }
    return (
        <div>
            <Select opciones={valores} onSelect={onSelect} defaultOption={2}></Select>
            <p>opcion seleccionada: {option}</p>
        </div>
    )
}

export default Abstraccion1;