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
export const SectionContent = styled.section`
    
       img{
           width: 100%;
           height: auto;
       }
       h1{
           font-size: 48px;
           color: ${(props) => props.theme['gray-800']};
           margin-bottom: 2rem;
           line-height: 65px;
           @media (max-width: 1050px) {
            font-size: 33px;
            margin-bottom: 0.5rem;
           }
           @media (max-width: 500px) {
            font-size: 25px;
            margin-bottom: 0.1rem;
           }
        }
       p{
           font-weight: 400;
           font-size: 24px;
           line-height: 33px;
           color: ${(props) => props.theme['gray-400']};
           @media (max-width: 1050px) {
            font-size: 18px;
           } 
           @media (max-width: 500px) {
            font-size: 13px;
            
           }            

       }
       div{
           display: flex;
           align-items: center;
           justify-content: flex-start;
           gap: 4rem;
           margin-top: 2.6rem;
           @media (max-width: 1050px) {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 1rem;
                margin-top: 2rem;
           }
           @media (max-width: 500px) {
                flex-direction: column;
                justify-content: center;
                gap:1rem
           }
          
       }
   
` 