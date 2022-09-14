import React from "react";

const Events = () => {
    const hacerClick = (event) => {
        console.log("click");
        console.log(event.nativeEvent)
    }

    const validarTexto = (e) => {
        let letra = e.key.toLowerCase();
        if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
            e.preventDefault()
        }
    }

    return <>
        <input type="button" onClick={hacerClick} value="Aceptar" />
        <input type="text" onKeyDown={validarTexto} onChange={() => {}} />
    </>
}

export default Events;