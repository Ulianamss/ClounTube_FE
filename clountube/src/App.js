import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {useRoutes} from './router/router'

function App() { 
  const routes = useRoutes();
  return (
    <Router>
      <div>
        {routes}
      </div>
    </Router>
  );
}
export default App;