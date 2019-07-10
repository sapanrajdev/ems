import React from 'react';
import { BudgetOverview } from '../commons/budget-overview/BudgetOverview';
import { CategoryWiseSplit } from '../commons/categorywise-split/CategoryWiseSplit';
import { ExpenseList } from './ExpenseList';

export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    handleChange = (e, index) => {
        const { data } = this.state;
        const { id, value } = e.target;
        data[index][id] = value;
        this.setState({
            data
        });
    }

    addExpense = (expense) => {
        let { data } = this.state;
        data = [expense, data];
        this.setState({
            data
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <BudgetOverview />
                    </div>
                    <div className="col-md-6">
                        <CategoryWiseSplit />
                    </div>
                </div>
                <button onClick={this.addExpense}>AddExpense</button>
                <ExpenseList />
                {/* <Pagination /> */}
            </div>
        );
    }
}