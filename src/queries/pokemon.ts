import { gql } from "@apollo/client";

export const POKEMON_SPECIES = gql`
  query PokemonSpecies {
    pokemon_v2_pokemonspecies(order_by: {id: asc}) {
      name
      id
    }
  } 
`;


export const POKEMON_SPECY_DETAILS = gql`
  query PokemonSpecyDetails($pokemonSpecyId: Int) {
    pokemon_v2_pokemon(where: {id: {_eq: $pokemonSpecyId}}) {
      name
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
      pokemon_v2_pokemonstats {
        pokemon_v2_stat {
          name
          pokemon_v2_statnames {
            name
            pokemon_v2_stat {
              id
            }
          }
        }
      }
    }
  }
`