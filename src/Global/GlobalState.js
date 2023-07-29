import { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContex";

export const GlobalState = ({ children }) => {
    const [pokedex, setPokedex] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [controlModal, setControlModal]= useState(1)
    const adicionarPokemon = (pokemon) => {
        setIsOpen(true)
        setControlModal(1)
        setPokedex([...pokedex, pokemon])
    }

    const removerpokemon = (pokenome) => {
        setIsOpen(true)
        setControlModal(2)
        setPokedex(pokedex.filter((poke) => poke.name !== pokenome))
    }
    const data = {
        pokedex,
        setPokedex,
        isOpen,
        setIsOpen,
        controlModal,
        setControlModal,
        adicionarPokemon,
        removerpokemon,
    }
    return (
        <GlobalStateContext.Provider value={data}>
            {children}
        </GlobalStateContext.Provider>
    )
}