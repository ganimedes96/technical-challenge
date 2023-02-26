import styled from 'styled-components'


export const FooterContainer = styled.footer`
  margin-top: 2rem;
  border-top: 1px solid ${(props) => props.theme['green-300']};
  @media (max-width: 1050px) {  
    margin-top: 1rem;  
  }
    div{
        margin-top: 2rem;
        display:flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2rem;
        @media (max-width: 500px) {  
        margin-top: 1rem;
            
        }
    }  
    p{
        margin-top: 1rem;
        font-weight: 400;
            font-size: 14px;
            text-decoration: none;
            color: ${(props) => props.theme['gray-400']};
    }
`

export const HeaderContent = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 2rem;
    nav{
        display: flex;
        align-items: center;
        justify-content: center;
        gap:1rem;
        @media (max-width: 500px) {  
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            gap: 0.5rem;
        }
        a{
            font-weight: 400;
            font-size: 16px;
            transition: color 0.4s;
            h3{
                font-weight: 400;
                font-size: 16px;
            }
            &:hover {
                color: ${(props) => props.theme['gray-400']};
            }
            &.active {
                h3{
                   font-weight: 700;
                   color: ${props => props.theme['gray-800']};

                   &:hover {
                       color: ${(props) => props.theme['gray-400']};
                   }
                }
            }
        }

    }

`