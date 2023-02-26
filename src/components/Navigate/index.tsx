import { Link } from "./NavLink"

export const Navigate = () => {
    return (
        <nav >
            <Link text="Home" path="/"/>
            <Link text="Pessoa Usuária" path="/users" />
            <Link text="Profissional" path="/professional" />
        </nav>
          
    )
}