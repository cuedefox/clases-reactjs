import React from "react";

const Vocales = () => {
    const onInput = (e) => {
        if(e.key == "a" || e.key == "e" || e.key == "i" || e.key == "o" || e.key == "u") {
            e.preventDefault();
        }
    }


    return <>
        <h1>Ingresa Algo</h1>
        <input type="text" onKeyDown={onInput} />
    </>
}

export default Vocales;