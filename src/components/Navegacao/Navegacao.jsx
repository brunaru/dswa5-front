import './Navegacao.css'
import { NavLink } from 'react-router-dom'
import authToken from '../../services/authtoken'

function Navegacao() {

    function logout() {
        authToken.removeAuthToken()
        window.location.reload()
    }

    return (
    <nav>
        <ul>
            <li>
                <NavLink to="/patrimonios">Patrimonios</NavLink>
            </li>
            <li>
                <NavLink to="/servidores">Servidores</NavLink>
            </li>
        </ul>
        <div><button className='logout' onClick={logout}>Logout</button></div>
    </nav>
    )
}

export default Navegacao