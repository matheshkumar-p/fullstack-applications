
import './index.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ProductView from "./Pages/Admin/productView"
import Catagory from "./Pages/ckart/Catagory"
import __404 from "./Error/404"
import CkartHome from "./Pages/ckart/CkartHome"
import FilterCategory from './Pages/ckart/FilterCategory';
function App() {
  return <>
  <Router >
    <Switch>
      <Route path="/" component={CkartHome} exact /> 
      <Route path="/catagory" component={Catagory} exact /> 
      <Route path="/catagory/:catagory" component={FilterCategory} exact /> 
      <Route component={__404}/>
    </Switch>
  </Router>
  </>
}

export default App;
