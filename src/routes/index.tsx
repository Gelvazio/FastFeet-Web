import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import SignInList from '../pages/SignInList';
import DeliveryList from '../pages/DeliveryList';
import DeliveryForm from '../pages/DeliveryForm';
import DeliverymanList from '../pages/DeliverymanList';
import DeliverymanForm from '../pages/DeliverymanForm';
import RecipientList from '../pages/RecipientList';
import ProblemsList from '../pages/ProblemsList';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignInList} />
      <Route path="/deliveries" component={DeliveryList} isPrivate />
      <Route path="/delivery/:id" component={DeliveryForm} isPrivate />
      <Route path="/delivery" component={DeliveryForm} isPrivate />
      <Route path="/deliverymans" component={DeliverymanList} isPrivate />
      <Route path="/deliveryman/:id" component={DeliverymanForm} isPrivate />
      <Route path="/deliveryman" component={DeliverymanForm} isPrivate />
      <Route path="/recipients" component={RecipientList} isPrivate />
      <Route path="/problems" component={ProblemsList} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
