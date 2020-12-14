import React from 'react';
import '../Tracker/Tracker.css';


let total = 10000;



class Tracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: [
                {
                    value: 0, title: 'Giving', label: 'giving', amount: ''
                },
                {
                    value: 0, title: 'Saving', label: 'saving', amount: ''
                },
                {
                    value: 0, title: 'Housing', label: 'housing', amount: ''
                },
                {
                    value: 0, title: 'Electrical', label: 'electrical', amount: ''
                },
                {
                    value: 0, title: 'Utilities', label: 'utilities', amount: ''
                },
                {
                    value: 0, title: 'Transportation', label: 'transportation', amount: ''
                },
                {
                    value: 0, title: 'Clothing', label: 'clothing', amount: ''
                },
                {
                    value: 0, title: 'Medical', label: 'medical', amount: ''
                },
                {
                    value: 0, title: 'Personal', label: 'personal', amount: ''
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
                if (parseInt(sum) > 100) {
                    newInputs.push(item);
                    window.alert('You have gone over 100% of your total.')
                } 
                else if (parseInt(sum) < 0){ // alert populates twice on browser
                    newInputs.push(item);
                    window.alert("You must have a positive percentage inputted.")
                }
                else {
                let newInput = {
                    value: parseInt(event.target.value),
                    title: item.title,
                    label: item.label,
                    amount: (parseInt(event.target.value) * total) / 100
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
            <div className='tracker_container'>
                <div className='tracker_row'>
                        <div className='column_left' style={{ paddingRight: '15%', float: 'left' }}>
                    <label for={item.label}>{item.title}</label>
                        </div>
                        <div className='column_middle'>
                    <input 
                        style={{ width: '50px'}}
                        type='number'
                        value={item.value} 
                        name={item.label} 
                        onChange={this.handleChange} />
                        </div>
                        <div className='column_right'>
                    <label>{item.amount}</label>
                        </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.state.inputs.map(this.renderForm)}
            </div>
        )
    }


}

export default Tracker;
