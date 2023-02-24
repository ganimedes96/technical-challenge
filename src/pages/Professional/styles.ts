import styled from 'styled-components'

export const MainContainer = styled.main`
    display:flex;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: 1050px) {
        flex-direction: column;
        justify-content: space-between;
    }
`

export const SectionContent  = styled.section`
    img{
        width: 100%;
        height: auto;
    }
`