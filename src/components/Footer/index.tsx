import { NavLink } from 'react-router-dom'
import {FooterContainer, HeaderContent} from './styles'
import facebook from '../../assets/Face.svg'
import instagram from '../../assets/Insta.svg'
import linkedin from '../../assets/Linkedin.svg'

export const Footer = () => {
    return (
        <FooterContainer>
            <HeaderContent>  
              <nav>
                <NavLink data-testid="home-footer" to='/' title='Home'>
                    <h3>Home</h3>
                </NavLink>
                <NavLink data-testid="users-footer" to='/users' title="Users">
                    <h3>Pessoa Usuária</h3>
                </NavLink>
                <NavLink data-testid="professional-footer" to='/professional' title="Professional">
                    <h3>Profissional</h3>
                </NavLink>
              </nav>
            </HeaderContent>
            <div>
                <img data-testid="img-face" src={facebook} alt="Facebook" />
                <img data-testid="img-insta" src={instagram} alt="Instagram" />
                <img data-testid="img-linke" src={linkedin} alt="Linkedin" />
            </div>
            <p>Desafio Front-end Lacrei </p>
        </FooterContainer>
    )
}