import React, { useEffect } from "react";

const Eventos = () => {
    useEffect(() => {
        const handleEsc = (e) => {
            console.log(e);

            if(e.keyCode === 27) {
                console.log("se cierra")
                window.removeEventListener("keydown", handleEsc);
            }
        }

        window.addEventListener("keydown", handleEsc);
    }, [])

    return <>
    
    </>
}

export default Eventos;