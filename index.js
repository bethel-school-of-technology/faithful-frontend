import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CashFlowMaking from './pages/CashFlowMaking';
import CashFlowDaily from './pages/CashFlowDaily';
import ShowBillsPaidList from './componentsbillspaid/ShowBillsPaidList';
import CreateBillsPaid from './componentsbillspaid/CreateBillsPaid';
import ShowDebtPayoffList from './componentsdebtpayoff/ShowDebtPayoffList';
import ShowSowReapList from './componentssowreap/ShowSowReapList';
import ShowSavingsList from './componentssavings/ShowSavingsList';
import ShowAttitudeList from './componentsattitudes/ShowAttitudeList';
import ShowDreamsList from './componentsdreams/ShowDreamsList';
import ShowMillPlanList from './componentsmillplan/ShowMillPlanList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

const styles = {
  textAlign: "center"
};

const App = () => (
  <Router>
    <div className='header'>
      <table className="links">
        <tr>
          <td>
           <button><Link to="/" className="btn btn-outline-blue">Home</Link></button> 
          </td>
          <td>
            <button><Link to="/CashFlowMaking">Determing Cash Flow</Link></button>
          </td>
          <td>
          <button><Link to="/BillsPaid">Bill Payment</Link></button>
          </td>
          <td>
          <button><Link to="/Attitudes">Attitudes Toward Money</Link></button>
          </td>
        </tr>
        <tr>
        <td>
         <button> <Link to="/signup">Sign Up</Link></button>
          </td>
          <td>
          <button><Link to="/CashFlowDaily">Daily/Weekly Cash Flow</Link></button>
          </td>
          <td>
          <button><Link to="/DebtPayoff">Debt Payoff</Link></button>
          </td>

          <td>
          <button><Link to="/Dreams">Dreams and Visions</Link></button>
          </td>
        </tr>
        <tr>
           
        <td>
            <button><Link to="/signin">Sign In</Link></button>
          </td>
          <td>
          <button><Link to="/SowReap">Sowing and Reaping</Link></button>
          </td>
       
          <td>
          <button><Link to="/Savings">Savings</Link></button>
          </td>
          <td>
          <button><Link to="/MillPlan">Million Dollar Plan</Link></button>
          </td>


        </tr>
      
      </table>



      <hr />
      <div className="col-md-12">
              <br />
              <h1 className="display-4 text-center">FAITHFUL</h1>
            </div>
      
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/CashFlowMaking" component={CashFlowMaking} />
      <Route path="/CashFlowDaily" component={CashFlowDaily} />
      <Route path="/BillsPaid" component={ShowBillsPaidList} />
      <Route path="/CreateBillsPaid" component={CreateBillsPaid} />
      <Route path="/DebtPayoff" component={ShowDebtPayoffList} />
      <Route path="/SowReap" component={ShowSowReapList} />
      <Route path="/Savings" component={ShowSavingsList} />
      <Route path="/Attitudes" component={ShowAttitudeList} />
      <Route path="/Dreams" component={ShowDreamsList} />
      <Route path="/MillPlan" component={ShowMillPlanList} />

    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
