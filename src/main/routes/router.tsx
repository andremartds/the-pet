import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { makePetForm } from '../factories/pages/pet-form/pet-form-factory'
import { makePetList } from '../factories/pages/pet-list/pet-list-factory'

const Router: React.FC = () => {
  return (<BrowserRouter>
    <Switch>
      <Route path="/" exact component={makePetList}></Route>
      <Route path="/form" exact component={makePetForm}></Route>
    </Switch>
  </BrowserRouter>)
}

export default Router