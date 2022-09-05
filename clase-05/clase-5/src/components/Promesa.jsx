import React from "react";

const Promesa = () => {
    const promesa = new Promise((resolve, reject) => {
        let valor = 3;
        resolve(valor);
    });

    promesa.then(resultado => {
        if (resultado === 0) {
            throw new Error("devuelve ningun numero");
        }
        console.log(`el valor de la promesa es ${resultado}`)
    }, valor_error => {
        console.log(`el error es ${valor_error}`)
    }).catch(error => {
        console.log(`error: ${error}`)
    }).then(
        console.log(Math.round(Math.random()))
    );

    return <>
    
    </>
}

export default Promesa;