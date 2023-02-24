import styled from 'styled-components'

export const LayoutContainer = styled.main`
    max-width: 85rem;
    margin: 6rem auto;
    padding:0 4rem ;
   

    @media (max-width: 1050px) {
        width:100%;
        max-width: 85rem;
        margin: 1rem auto;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem auto;
        padding: 0 2rem;

    }
    @media (max-width: 500px) {
       margin: 1.5rem auto;
       padding:0 1rem ;
       

    }

`


