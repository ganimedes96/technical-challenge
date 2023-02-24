import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background: ${(props) => props.theme['gray-100']};
    padding: 0.5rem 4rem ; 
    width: 100%;
`

export const HeaderContent = styled.div`
    height: '60px';
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 85rem;
    margin:0 auto;
    @media (max-width: 600px) {
        flex-direction: column;
    }
    h2{
        color: ${(props) => props.theme['green-500']};
        font-weight: 700;
        font-size: 2rem;
    };
    nav{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.5rem;
        @media (max-width: 1050px) {
            gap: 1.8rem;
        }
        a{
            text-decoration: none;
            color: ${(props) => props.theme['gray-800']};
            transition: color 0.4s;
            h3{
                font-size: 17px;
                font-weight: bold;
            }
            @media (max-width: 1050px) {
                font-size: 14px;
                gap: 2rem;
            }
            &:hover {
              color: ${(props) => props.theme['gray-400']};

            }
            &.active {
                h3{
                    color: ${props => props.theme['green-500']};
                    &:hover {
                        color: ${(props) => props.theme['green-300']};
                    }

                }

            }
        }
    }
`