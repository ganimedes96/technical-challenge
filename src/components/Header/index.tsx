import { NavLink } from "react-router-dom"
import { Navigate } from "../Navigate"
import { HeaderContainer, HeaderContent } from "./styles"

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <NavLink to="/">
                    <h2 data-testid="logo">Lacrei</h2>
                </NavLink>
               <Navigate/>
            </HeaderContent>
        </HeaderContainer>
    )
}