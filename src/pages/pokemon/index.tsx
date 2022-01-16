import React from "react";
import ApolloClient from "../../apollo";
import Search from "../../containers/search/search";
import Layout from "../../containers/layout/layout";
import { POKEMON_SPECIES } from "../../queries/pokemon";
import { PokemonSpecy } from "../../types/pokemon";

type PokemonProps = {
    pokemonSpecyList: PokemonSpecy[];
}

const Pokemon: React.FC<PokemonProps> = ({ pokemonSpecyList }) => {
    return (
        <Layout>
            <Search pokemonSpecyList={pokemonSpecyList} />
        </Layout>
    )
}

export const getStaticProps = async () => {
    const { data } = await ApolloClient.query({ query: POKEMON_SPECIES });

    return {
        props: {
            pokemonSpecyList: data.pokemon_v2_pokemonspecies
        }
    }
}

export default Pokemon;