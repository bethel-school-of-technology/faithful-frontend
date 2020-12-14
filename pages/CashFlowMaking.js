import '../App.css';
import React, { Component, useState, useEffect } from 'react';




const CashFlowMaking = () => {

    var [isEdit, setIsEdit] = useState("");
    var [incomes, setIncomes] = useState([]);
    var [income, setIncome] = useState({});

    var [date, setDate] = useState(Date);
    var [description, setDescription] = useState('');
    var [time, setTime] = useState('yearly');
    var [cash, setCash] = useState(0);

    useEffect(() => {
        const getAllIncomes = async () => {
            let incomeData = await fetch('http://localhost:3001/cashflow')
            let Incomes = await incomeData.json();

            console.log(Incomes);


            setIncomes(Incomes.data.incomes);
            
        }

        getAllIncomes();

    }, [])  

    const handleSubmit = async (e) => {
        e.preventDefault();

        let newIncomeData = await fetch('http://localhost:3001/cashflow/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    date,
                    description,
                    time,
                    cash
            })
        })

        let newIncome = await newIncomeData.json(); 


    }



    return (
        <div>
            <div className="occupation_creator">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="income_descrption">How would you describe this source of income?<br></br>
                        <input  type='text'
                                name='description'
                                onChange={e => setDescription(e.target.value)}
                                required />
                    </label>
                    <br></br>
                    <label htmlFor="income_calc">How often do you receive these funds?<br></br>
                        <select type='text'
                                name="time"
                                onChange={e => setTime(e.target.value)}
                                required>
                            <option value="yearly">Yearly</option>
                            <option value="monthly">Monthly</option>
                            <option value="bi-weekly">Bi-weekly</option>
                            <option value="weekly">Weekly</option>
                            <option value="hourly">Hourly</option>
                            <option value="onetime">One-time</option>
                        </select><br></br>
                    </label>
                    <label htmlFor="income_total">How much money do you receive?<br></br>
                        <input  type='number'
                                name='total'
                                onChange={e => setCash(e.target.value)}
                                required />
                    </label>
                    <br></br>
                    <br></br>
                    <input type='submit' />
                </form>

                <div className='incomes'>{incomes.map((income, index) => {
                    return (
                        <div key={index}>
                            {income.description} {income.time} {income.cash}
                        </div>
                    )
                })}
                </div>

            </div>
        </div>
    )
}


export default CashFlowMaking;