import Link from "next/link";
import React from "react";
import { PokemonSpecy } from "../../types/pokemon";
import { StyledPokemonSpecy } from "./pokemon-specy-list.styled";

type PokemonSpecyListProps = {
    pokemonSpecyList: PokemonSpecy[]
}

const PokemonSpecyList: React.FC<PokemonSpecyListProps> = ({ pokemonSpecyList }) => {
    return (
    <ul>
        {pokemonSpecyList.map((pokemonSpecy: PokemonSpecy) => 
            (
                <Link href={`/pokemon/${pokemonSpecy.id}`} key={pokemonSpecy.id} passHref>
                    <StyledPokemonSpecy>{pokemonSpecy.name}</StyledPokemonSpecy>
                </Link>
            )
        )}
    </ul>
)}

export default PokemonSpecyList;