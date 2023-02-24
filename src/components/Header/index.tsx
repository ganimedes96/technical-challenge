import { NavLink } from "react-router-dom"
import { HeaderContainer, HeaderContent } from "./styles"

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <h2>Lacrei</h2>
                <nav>
                    <NavLink to='/' title='Home'>
                        <h3>Home</h3>
                    </NavLink>
                    <NavLink to='/users' title="Users">
                        <h3>Pessoal Usuaria</h3>
                    </NavLink>
                    <NavLink to='/professional' title="Professional">
                        <h3>Profissional</h3>
                    </NavLink>
                </nav>
            </HeaderContent>
        </HeaderContainer>
    )
}