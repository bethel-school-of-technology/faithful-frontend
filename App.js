import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateAttitude from './componentsattitudes/CreateAttitude';
import ShowAttitudeList from './componentsattitudes/ShowAttitudeList';
import ShowAttitudeDetails from './componentsattitudes/ShowAttitudeDetails';
import UpdateAttitudeInfo from './componentsattitudes/UpdateAttitudeInfo';

import CreateBillsPaid from './componentsbillspaid/CreateBillsPaid';
import ShowBillsPaidList from './componentsbillspaid/ShowBillsPaidList';
import ShowBillsPaidDetails from './componentsbillspaid/ShowBillsPaidDetails';
import UpdateBillsPaidInfo from './componentsbillspaid/UpdateBillsPaidInfo';

import CreateDebtPayoff from './componentsdebtpayoff/CreateDebtPayoff';
import ShowDebtPayoffList from './componentsdebtpayoff/ShowDebtPayoffList';
import ShowDebtPayoffDetails from './componentsdebtpayoff/ShowDebtPayoffDetails';
import UpdateDebtPayoffInfo from './componentsdebtpayoff/UpdateDebtPayoffInfo';

import CreateSavings from './componentssavings/CreateSavings';
import ShowSavingsList from './componentssavings/ShowSavingsList';
import ShowSavingsDetails from './componentssavings/ShowSavingsDetails';
import UpdateSavingsInfo from './componentssavings/UpdateSavingsInfo';

import CreateDreams from './componentsdreams/CreateDreams';
import ShowDreamsList from './componentsdreams/ShowDreamsList';
import ShowDreamsDetails from './componentsdreams/ShowDreamsDetails';
import UpdateDreamsInfo from './componentsdreams/UpdateDreamsInfo';

import CreateMillPlan from './componentsmillplan/CreateMillPlan';
import ShowMillPlanList from './componentsmillplan/ShowMillPlanList';
import ShowMillPlanDetails from './componentsmillplan/ShowMillPlanDetails';
import UpdateMillPlanInfo from './componentsmillplan/UpdateMillPlanInfo';

import CreateSowReap from './componentssowreap/CreateSowReap';
import ShowSowReapList from './componentssowreap/ShowSowReapList';
import ShowSowReapDetails from './componentssowreap/ShowSowReapDetails';
import UpdateSowReapInfo from './componentssowreap/UpdateSowReapInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/attitudes' component={ShowAttitudeList} />
          <Route path='/attitudes/add' component={CreateAttitude} />
          <Route path='/attitudes/update/:id' component={UpdateAttitudeInfo} />
          <Route path='/attitudes/:id' component={ShowAttitudeDetails} />

          <Route exact path='/billspaid' component={ShowBillsPaidList} />
          <Route path='/billspaid/add' component={CreateBillsPaid} />
          <Route path='/billspaid/update/:id' component={UpdateBillsPaidInfo} />
          <Route path='/billspaid/:id' component={ShowBillsPaidDetails} />

          <Route exact path='/debtpayoff' component={ShowDebtPayoffList} />
          <Route path='/debtpayoff/add' component={CreateDebtPayoff} />
          <Route path='/debtpayoff/update/:id' component={UpdateDebtPayoffInfo} />
          <Route path='/debtpayoff/:id' component={ShowDebtPayoffDetails} />

          <Route exact path='/savings' component={ShowSavingsList} />
          <Route path='/savings/add' component={CreateSavings} />
          <Route path='/savings/update/:id' component={UpdateSavingsInfo} />
          <Route path='/savings/:id' component={ShowSavingsDetails} />

          <Route exact path='/dreams' component={ShowDreamsList} />
          <Route path='/dreams/add' component={CreateDreams} />
          <Route path='/dreams/update/:id' component={UpdateDreamsInfo} />
          <Route path='/dreams/:id' component={ShowDreamsDetails} />

          <Route exact path='/millplan' component={ShowMillPlanList} />
          <Route path='/millplan/add' component={CreateMillPlan} />
          <Route path='/millplan/update/:id' component={UpdateMillPlanInfo} />
          <Route path='/millplan/:id' component={ShowMillPlanDetails} />

          <Route exact path='/sowreap' component={ShowSowReapList} />
          <Route path='/sowreap/add' component={CreateSowReap} />
          <Route path='/sowreap/update/:id' component={UpdateSowReapInfo} />
          <Route path='/sowreap/:id' component={ShowSowReapDetails} />
          
        </div>
      </Router>
    );
  }
}

export default App;