import styled,{css} from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary'


interface ButtonContainerProps {
    variant:  ButtonVariant
    textColor: ButtonVariant
}

const buttonVariants = {
    primary: '#018762',
    secondary: '#fff'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    padding:0.5rem;
    font-size: 18px;
    font-weight: 700;
    border-style: none;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 192px;
    ${props => {
        return css`color: ${buttonVariants[props.textColor]}`
    }};
    border: 2px solid ${(props) => props.theme['green-500']};
    ${props => {
        return css`background-color: ${buttonVariants[props.variant]}`
    }};   
    
`