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
          <Route path='/CreateAttitude' component={CreateAttitude} />
          <Route path='/UpdateAttitudeInfo/:id' component={UpdateAttitudeInfo} />
          <Route path='/ShowAttitudeDetails/:id' component={ShowAttitudeDetails} />

          <Route exact path='/billspaid' component={ShowBillsPaidList} />
          <Route path='/CreateBillsPaid' component={CreateBillsPaid} />
          <Route path='/UpdateBillsPaidInfo/:id' component={UpdateBillsPaidInfo} />
          <Route path='/ShowBillsPaidDetails/:id' component={ShowBillsPaidDetails} />

          <Route exact path='/debtpayoff' component={ShowDebtPayoffList} />
          <Route path='/CreateDebtPayoff' component={CreateDebtPayoff} />
          <Route path='/UpdateDebtPayoffInfo/:id' component={UpdateDebtPayoffInfo} />
          <Route path='/ShowDebtPayoffDetails/:id' component={ShowDebtPayoffDetails} />

          <Route exact path='/savings' component={ShowSavingsList} />
          <Route path='/CreateSavings' component={CreateSavings} />
          <Route path='/UpdateSavingsInfo/:id' component={UpdateSavingsInfo} />
          <Route path='/ShowSavingsDetails/:id' component={ShowSavingsDetails} />

          <Route exact path='/dreams' component={ShowDreamsList} />
          <Route path='/CreateDreams' component={CreateDreams} />
          <Route path='/UpdateDreamsInfo/:id' component={UpdateDreamsInfo} />
          <Route path='/ShowDreamsDetails/:id' component={ShowDreamsDetails} />

          <Route exact path='/millplans' component={ShowMillPlanList} />
          <Route path='/CreateMillPlan' component={CreateMillPlan} />
          <Route path='/UpdateMillPlanInfo/:id' component={UpdateMillPlanInfo} />
          <Route path='/ShowMillPlanDetails/:id' component={ShowMillPlanDetails} />

          <Route exact path='/sowreaps' component={ShowSowReapList} />
          <Route path='/CreateSowReap' component={CreateSowReap} />
          <Route path='/UpdateSowReapInfo/:id' component={UpdateSowReapInfo} />
          <Route path='/ShowSowReapDetails/:id' component={ShowSowReapDetails} />
          
        </div>
      </Router>
    );
  }
}

export default App;