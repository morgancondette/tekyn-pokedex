import React from "react";
import { StyledTopbar, StyledContainer } from "./layout.styled";

type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <StyledContainer>
            <StyledTopbar>Pokedex</StyledTopbar>
            {children}
        </StyledContainer>
    )
}

export default Layout;