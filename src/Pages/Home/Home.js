/*import ReactDOM from 'react-dom';*/
import { Link } from 'react-router-dom';

import "./Home.css";

function Home() {
    return(
        <div className="Home">
            <div className="panel">
            <h2>
                Olá passageiro, este site tem como objetivo passar informações sobre o nosso espetacular sistema solar
            </h2>
            <Link to="/escolha"><h3>Escolher destino</h3></Link>
            </div>
        </div>
    )
}
export default Home;