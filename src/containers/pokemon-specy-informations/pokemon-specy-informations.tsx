import React from "react";
import { PokemonSpecyDetails } from "../../types/pokemon";

type PokemonSpecyInformationsProps = {
    pokemonSpecyDetails: PokemonSpecyDetails
}

const PokemonSpecyInformations: React.FC<PokemonSpecyInformationsProps> = ({ pokemonSpecyDetails }) => {
    const { name } = pokemonSpecyDetails;
    return (
        <>
            <h1>Pokemon details : {name}</h1>
        </>
    )
}

export default PokemonSpecyInformations;