import React from 'react';
import '../Occupations/Occupations.css';


class Occupations extends React.Component {
    constructor(props) { // guidance on use of constructor for correlating input with object attributes
        super(props);
        this.income = {
            description: '',
            time: '',
            total: 0
        };
        this.allIncomes = [];

        
        this.displayIncome = this.displayIncome.bind(this);
    }
    


    displayIncome = () => {
        // need to take the income_description input and display it as an added income after pressing Add Income button
        let description = this.income.description

        let time = this.income.time;
        this.income.total = document.getElementById('income_total').value;
        this.allIncomes.push(this.income);

        console.log(this.allIncomes);
        console.log(this.income); 
    }


    render() {
        return ( 
            <div> 
                <div className="occupation_creator">                    
                    <form>
                        <label htmlFor="income_descrption">How would you describe this source of income?<br></br>
                        <input id='income_description' />
                        </label>
                        <br></br>
                        <label htmlFor="income_calc">How often do you receive these funds?<br></br>
                        <select id="income_time">
                            <option type='number' value="yearly">Yearly</option>
                            <option type='number' value="monthly">Monthly</option>
                            <option type='number' value="bi-weekly">Bi-weekly</option>
                            <option type='number' value="weekly">Weekly</option>
                            <option type='number' value="hourly">Hourly</option>
                            <option type='number' value="onetime">One-time</option>
                        </select><br></br>
                        </label>
                        <label htmlFor="income_total">How much money do you receive?<br></br>
                        <input id='income_total' />
                        </label>
                        <br></br>
                        <br></br>
                        <button onClick={this.displayIncome}>Add Income</button>
                    </form>

                    <div id='values'></div>
                       
                </div>
            </div>
        )
    }


}

export default Occupations;