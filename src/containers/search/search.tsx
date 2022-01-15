import React, { useState } from "react";
import { useDebounce } from "use-debounce";
import SearchBar from "../../components/search-bar/search-bar";
import { PokemonSpecy } from "../../types/pokemon";
import PokemonSpecyList from "../pokemon-specy-list/pokemon-specy-list";
import { useGetSearch } from "./search.hook";

type HeaderSearchProps = {
    pokemonSpecyList: PokemonSpecy[]
}

const Search: React.FC<HeaderSearchProps> = ({ pokemonSpecyList }) => {
    const [currentSearchTerms, setCurrentSearchTerms] = useState<string>("")
    const [currentDebouncedSearchTerms] = useDebounce(currentSearchTerms, 200)
    const filteredPokemonSpecyList = useGetSearch(currentDebouncedSearchTerms, pokemonSpecyList);

    const handleSearchBarChange = (e: React.BaseSyntheticEvent) => setCurrentSearchTerms(e.target.value)

    return (
        <>
            <SearchBar value={currentSearchTerms} handleChange={handleSearchBarChange} />
            <PokemonSpecyList pokemonSpecyList={filteredPokemonSpecyList} />
        </>
    )
}

export default Search;