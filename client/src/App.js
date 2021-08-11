import Header from './Components/Header';
import FirstPage from './Components/FirstPage';
import UserRegister  from './Components/UserRegister'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={FirstPage}/>
        <Route path="/register" exact component={UserRegister}/>
      </div>
    </Router>
  );
}

export default App;
