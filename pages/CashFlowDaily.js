import React, { Component, useState, useEffect } from 'react';
import '../App.css';

// add income input fields to add to cash attribute for spontaneous/weekly incomes

let incomes = [];
let incomeSum = 0;
let newIncomeSum = 0;
let totalIncomeSum = incomeSum + newIncomeSum;


const Total = () => {

    const getIncomes = async () => {

        let allIncomes = await fetch('http://localhost:3001/cashflow')
        let incomesDisplay = await allIncomes.json();


        incomesDisplay.data.incomes.forEach(item => {
            if (item === item.cash) {
                incomes.push(parseInt(item));
            }

            incomeSum += parseInt(item.cash);
            parseInt(incomeSum) 
        })


        return (
            totalIncomeSum
        )
    }

    getIncomes();
    
}


Total();



class CashFlowDaily extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: [
                {
                    value: 0, title: 'Giving', label: 'giving', amount: 0
                },
                {
                    value: 0, title: 'Saving', label: 'saving', amount: 0
                },
                {
                    value: 0, title: 'Housing', label: 'housing', amount: 0
                },
                {
                    value: 0, title: 'Electrical', label: 'electrical', amount: 0
                },
                {
                    value: 0, title: 'Utilities', label: 'utilities', amount: 0
                },
                {
                    value: 0, title: 'Transportation', label: 'transportation', amount: 0
                },
                {
                    value: 0, title: 'Clothing', label: 'clothing', amount: 0
                },
                {
                    value: 0, title: 'Medical', label: 'medical', amount: 0
                },
                {
                    value: 0, title: 'Personal', label: 'personal', amount: 0
                }
            ]
        }

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange = (event) => {
        const label = event.target.name;
        let newInputs = [];
        let sum = 0;
        this.state.inputs.forEach(item => {
            sum = parseInt(parseInt(sum) + parseInt(item.value))
        })

        sum += parseInt(event.target.value);

        this.state.inputs.forEach(item => {
            if (item.label === label) {
                console.log(item);
                if (parseInt(sum) > 110) { // if input is > 91, it triggers this alert...need help from Bob on that
                    newInputs.push(item);
                    window.alert('You have gone over 100% of your total.')
                }
                else if (parseInt(sum) < 0) {
                    newInputs.push(item);
                    window.alert("You must have a positive percentage inputted.")
                }
                else {
                    let newInput = {
                        value: parseInt(event.target.value),
                        title: item.title,
                        label: item.label,
                        amount: (parseInt(event.target.value) * newIncomeSum) / 100
                    };
                    newInputs.push(newInput);
                }
            } else {
                newInputs.push(item)
            }
        });
        this.setState({
            inputs: newInputs
        });
    }

    renderForm = (item) => {
        return (
            <div className='tracker_container'><br></br>
                <div className='col-lg-11' style={{ float: 'left', width: '20%' }}>
                    <label for={item.label}>{item.title}</label>
                </div>
                <div className='col-md-11'>
                    <input
                        style={{ width: '50px' }}
                        type='number'
                        value={item.value}
                        name={item.label}
                        onChange={this.handleChange} />

                </div>
                <div className='col-sm-11' style={{ marginRight: '75%' }}>
                    <label>{item.amount}</label>
                </div>
            </div>
        )
    }



    render() {
        return (
            <div>
                <button 
                    style={{ marginRight: '50%', marginLeft: '50%' }}>Add Income

                <input 
                    type='number'
                    onChange={e => {
                        newIncomeSum = incomeSum + parseInt(e.target.value);
                        console.log(newIncomeSum);
                    }}
                    style={{ marginRight: '97%', marginLeft: '3%', width: '50px' }} />
                    </button>
                <div>{this.state.inputs.map(this.renderForm)}</div>
            </div>
        )
    }


}

export default CashFlowDaily;