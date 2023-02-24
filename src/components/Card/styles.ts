import styled from 'styled-components'


export const SectionContainer = styled.section`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   gap: 2rem;
   @media (max-width: 1050px) {
        gap: 1rem;
   } 
   h1{
        font-size: 48px;
        font-weight: 700;
        line-height: 65px;
        color: ${(props) => props.theme['gray-800']};
        @media (max-width: 1050px) {
            font-size: 30px;
            line-height: 40px;
            gap: 1rem;
        } 
        @media (max-width: 500px) {
            font-size: 25px;
            line-height:20px;
            gap: 0.5rem;
        } 
   }
` 

export const CardContent = styled.div`
   width: 36rem;
   padding: 0 1.5rem; 
   border-left: 5px solid ${(props) => props.theme['green-500']};
   @media (max-width: 1050px) {
        width: 60vw;
        margin:0 auto;
        padding: 0 1rem;
   }
   @media (max-width: 730px) { 
        width: 100%;
   }
   p{
        color: ${(props) => props.theme['gray-500']};
        font-weight: 400;
        font-size: 24px;
        line-height: 33px; 
        @media (max-width: 1050px) {
            width: 100%;
            font-size: 17px;
            line-height: 25px; 

        } 
        @media (max-width: 500px) {
            width: 100%;
            font-size: 14px;
            line-height: 20px; 

        } 
   }
`
