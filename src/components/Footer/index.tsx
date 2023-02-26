import { NavLink } from 'react-router-dom'
import {FooterContainer, HeaderContent} from './styles'
import facebook from '../../assets/Face.svg'
import instagram from '../../assets/Insta.svg'
import linkedin from '../../assets/Linkedin.svg'
import { Navigate } from '../Navigate'

export const Footer = () => {
    return (
        <FooterContainer>
            <HeaderContent>  
              <Navigate />
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