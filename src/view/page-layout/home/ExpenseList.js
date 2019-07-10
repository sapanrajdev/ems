import React from 'react';
export const ExpenseList = (props) => {
    return (
        <table className="table">
            <tr>
                <th>Category</th>
                <th>Item Name</th>
                <th>Amount</th>
                <th>Expense Date</th>
            </tr>
            <tbody>
                {
                    props.expenses
                    && props.expenses.map(expense => {
                        return (
                            <tr>
                                <td>{expense.category}</td>
                                <td>{expense.name}</td>
                                <td>{expense.amount}</td>
                                <td>{expense.date}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}