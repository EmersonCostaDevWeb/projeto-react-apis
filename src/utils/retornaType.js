import bug from "../imagens/bug.png"
import dark from "../imagens/dark.png"
import ditto from "../imagens/ditto.png"
import dragon from "../imagens/dragon.png"
import electric from "../imagens/electric.png"
import fairy from "../imagens/fairy.png"
import fighting from "../imagens/fighting.png"
import fire from "../imagens/fire.png"
import flying from "../imagens/flying.png"
import ghost from "../imagens/ghost.png"
import grass from "../imagens/grass.png"
import ground from "../imagens/ground.png"
import ice from "../imagens/ice.png"
import normal from "../imagens/normal.png"
import poison from "../imagens/poison.png"
import pokeball from "../imagens/pokeball.png"
import pokebola from "../imagens/pokebola.png"
import pokedex from "../imagens/pokedex.png"
import psychic from "../imagens/psychic.png"
import rock from "../imagens/rock.png"
import steel from "../imagens/steel.png"
import water from "../imagens/water.png"

export const retornaType = (type) => {
    switch (type) {
        case "bug":
            return bug
        case "dark":
            return dark
        case "ditto":
            return ditto
        case "dragon":
            return dragon
        case "electric":
            return electric
        case "fairy":
            return fairy
        case "fighting":
            return fighting
        case "fire":
            return fire
        case "flying":
            return flying
        case "ghost":
            return ghost
        case "grass":
            return grass
        case "ground":
            return ground
        case "ice":
            return ice
        case "normal":
            return normal
        case "poison":
            return poison
        case "pokeball":
            return pokeball
        case "pokebola":
            return pokebola
        case "pokedex":
            return pokedex
        case "psychic":
            return psychic
        case "rock":
            return rock
        case "steel":
            return steel
        default:
            return water
    }
}