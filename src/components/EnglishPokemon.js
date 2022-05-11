import React, { useState } from "react";
import EnglishPokemonNames from "./EnglishPokemonNames";
import Navbar from "./Navbar";
import GetPokemonNumber from "./GetPokemonNumber"
import GetOpenseaLink from "./GetOpenseaLink";
import "../styles/universalPokedex.css"

export default function EnglishPokemon(){

    const [filter, setFilter] = useState("")

    function handleChange(filter){
        setFilter(filter);
    }

    function returnFilteredArray(){
        if(filter === ""){
            return EnglishPokemonNames
        }
        else{
            let filteredArray = EnglishPokemonNames.filter(pokemon => 
                pokemon.includes(filter.toLowerCase()) || GetPokemonNumber(EnglishPokemonNames.indexOf(pokemon)).includes(filter)
            )
            return filteredArray
        }
    }

    return <div>
        <Navbar/>
        <div className="searchContainer">
            <input type={"text"} className="pokeSearch" onChange={(e) => handleChange(e.target.value)} placeholder="Searching for Pokemon..."></input>
        </div>
        <table className="displayContainer">
            <tr className="titles">
                <th className="pokemonNumber">Number</th>
                <th className="pokemonName">Name</th>
                <th className="ensLink" id="tableENS">ENS Link</th>
                <th className="osLink" id="tableOS">OS Link</th>
                <th className="lrLink" id="tableLR">LR Link</th>
            </tr>
            {returnFilteredArray().map(pokemon => {
                return <tr key={pokemon} className="pokemonDisplay">
                    <th className="pokemonNumber">
                        {`#${GetPokemonNumber(EnglishPokemonNames.indexOf(pokemon))}`}
                    </th> 
                    <th className="pokemonName">
                        {`${pokemon}.eth`}
                    </th>
                    <th className="ensLink">
                        <a href={`https://app.ens.domains/name/${pokemon}.eth/details`} target="_blank" className="ensAnchor">
                        <img src="https://www.coinspot.com.au/public/img/coinlg/ethereum%20name%20service.png?v=12" className="osImage" alt="ENS's Logo"></img>
                        ENS
                        </a>
                    </th>
                    <th className="osLink">
                        <a href={`https://opensea.io/assets/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/${GetOpenseaLink(pokemon)}`} target="_blank" className="osAnchor">
                        <img src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.png" className="osImage" alt="OpenSea's Logo"></img>
                            OS
                        </a>
                    </th>
                    <th className="lrLink">
                        <a href={`https://looksrare.org/collections/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/${GetOpenseaLink(pokemon)}`} target="_blank" className="lrAnchor">
                        <img src="https://i.ibb.co/bRTX26b/looksrare.png" className="osImage" alt="Looks Rare's Logo"></img>
                        LR
                        </a>
                    </th>
                </tr>
            })}
        </table>
    </div>
}