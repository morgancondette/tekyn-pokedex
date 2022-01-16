import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import Layout from "../../containers/layout/layout"
import ApolloClient from "../../apollo";
import { POKEMON_SPECY_DETAILS } from "../../queries/pokemon";
import { PokemonSpecyDetails } from "../../types/pokemon";
import PokemonSpecyInformations from "../../containers/pokemon-specy-informations/pokemon-specy-informations";

type PokemonSpecyIdProps = {
    pokemonSpecyInformations: PokemonSpecyDetails;
}

const PokemonSpecyId: React.FC<PokemonSpecyIdProps> = ({ pokemonSpecyInformations }) => {
    return (
        <Layout>
            {pokemonSpecyInformations && <PokemonSpecyInformations pokemonSpecyDetails={pokemonSpecyInformations} />}
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const pokemonSpecyId = context.query.pokemonSpecyId

    const { data } = await ApolloClient.query({ query: POKEMON_SPECY_DETAILS, variables: { pokemonSpecyId } });

    return {
        props: {
            pokemonSpecyInformations: data.pokemon_v2_pokemon[0]
        }
    }
}
export default PokemonSpecyId;