import { NavLink } from "react-router-dom"
import { HeaderContainer, HeaderContent } from "./styles"

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <NavLink to="/">
                    <h2 data-testid="logo">Lacrei</h2>
                </NavLink>
                <nav>
                    <NavLink data-testid="home-nav" to='/' title='Home'>
                        <h3>Home</h3>
                    </NavLink>
                    <NavLink to='/users' data-testid="users-nav" title="Users">
                        <h3>Pessoa Usuáriaa</h3>
                    </NavLink>
                    <NavLink to='/professional'data-testid="professional-nav" title="Professional">
                        <h3>Profissional</h3>
                    </NavLink>
                </nav>
            </HeaderContent>
        </HeaderContainer>
    )
}