import { GetServerSideProps, GetServerSidePropsContext } from "next"
import Layout from "../../containers/layout/layout"
import ApolloClient from "../../apollo";
import { POKEMON_SPECY_DETAILS } from "../../queries/pokemon";
import { PokemonSpecyDetails } from "../../types/pokemon";

type PokemonSpecyIdProps = {
    data: PokemonSpecyDetails;
}

const PokemonSpecyId: React.FC<PokemonSpecyIdProps> = ({ data }) => {
    console.log(data);
    return (
        <Layout>
            Pokemon {data}
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const pokemonSpecyId = context.query.pokemonSpecyId

    const { data } = await ApolloClient.query({ query: POKEMON_SPECY_DETAILS, variables: { pokemonSpecyId } });
    console.log(data)

    return {
        props: {
            pokemonSpecyDetails: data.pokemon_v2_pokemon
        }
    }
}
export default PokemonSpecyId;