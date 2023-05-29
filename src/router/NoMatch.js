import { Link, useLocation as Location } from 'react-router-dom'

const removeSlash = () => {
    const path = Location().pathname
    return path.replace('/', '')
}
export default function NoMatch() {
    return (
        <center>
            <h2 style={{ textAlign: 'center' }}>Erreur 404</h2>
            <p>
                La page <strong>{removeSlash()}</strong> n'existe pas
            </p>
            <Link to='/'>Retour à l'accueil</Link>
        </center>
    )
}
