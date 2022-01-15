import { PokemonSpecy } from "../../types/pokemon";

export const useGetSearch = (searchTerms: string, pokemonSpecyList: PokemonSpecy[]) => {
    if(searchTerms.length < 3) return [];

    return pokemonSpecyList.filter((pokemonSpecy: PokemonSpecy) => new RegExp(searchTerms, "i").test(pokemonSpecy.name));
}