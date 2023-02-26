import { NavLink } from "react-router-dom"


interface TestIdProps {
    testIdHome: string
    testIdUses: string
    testIdProfessional: string
}

export const Navigate = (
    {testIdHome, testIdProfessional, testIdUses}:TestIdProps
    ) => {
    return (
        <nav >
            <NavLink 
                data-testid={testIdHome}
                to="/"     
             >
                <h3>Home</h3>
            </NavLink>
            <NavLink 
                data-testid={testIdUses} 
                to="/users"     
             >
                <h3>Pessoa Usuária</h3>
            </NavLink>
            <NavLink 
                data-testid={testIdProfessional} 
                to="/professional"     
             >
                <h3>Profissional</h3>
            </NavLink>
        </nav>
          
    )
}