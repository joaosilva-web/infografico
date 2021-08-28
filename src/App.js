import { BrowserRouter as Router,
    Route,
    Switch,
    Link,
  } from 'react-router-dom';

/*import Planet from "./components/Planet/Planet";*/
import ChoiceRoute from "./Pages/ChoiceRoute/ChoiceRoute";
import Sol from './Pages/Sol';
import Mercurio from './Pages/Mercurio';
import Venus from './Pages/Venus';
import Terra from './Pages/Terra';
import Marte from './Pages/Marte';

import '../src/app.css';
import Saturno from './Pages/Saturn';
import Urano from './Pages/Urano';
import Netuno from './Pages/Netuno';
import Plutao from './Pages/Pluto';


function App() {
  return (
    <Router>
    <div className="App">
      <Link to="/">Escolher planeta</Link>
      <Switch>
        <Route path="/" exact component={ChoiceRoute} />
        <Route path="/Sol" exact component={Sol} />
        <Route path="/Mercurio" component={Mercurio} />
        <Route path="/Venus" component={Venus} />
        <Route path="/Terra" component={Terra} />
        <Route path="/Marte" component={Marte} />
        <Route path="/Saturno" component={Saturno} />
        <Route path="/Urano" component={Urano} />
        <Route path="/Netuno" component={Netuno} />
        <Route path="/Plutao" component={Plutao} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
