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
                <NavLink to='/' title='Home'>
                    <h3>Home</h3>
                </NavLink>
                <NavLink to='/users' title="Users">
                    <h3>Pessoa Usuária</h3>
                </NavLink>
                <NavLink to='/professional' title="Professional">
                    <h3>Profissional</h3>
                </NavLink>
              </nav>
            </HeaderContent>
            <div>
                <img src={facebook} alt="Facebook" />
                <img src={instagram} alt="Instagram" />
                <img src={linkedin} alt="Linkedin" />
            </div>
            <p>Desafio Front-end Lacrei  </p>
        </FooterContainer>
    )
}