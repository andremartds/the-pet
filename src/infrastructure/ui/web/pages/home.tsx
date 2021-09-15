import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PetList } from '../components/Pet/PetList';

export const Home = () => {
  return (<Router>
    <div className="container mx-auto">
      <Switch>
        <Route exact path="/" component={PetList} />
      </Switch>
    </div>
  </Router>)
}