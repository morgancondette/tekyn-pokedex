import React from "react";
import { StyledSearchBar } from "./search-bar.styled";

type SearchBarProps = {
    value: string;
    handleChange: (e: React.BaseSyntheticEvent) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, handleChange }) => {
    return (
        <StyledSearchBar value={value} onChange={handleChange} placeholder="Search for a Pokemon"/>
    )
}

export default SearchBar;