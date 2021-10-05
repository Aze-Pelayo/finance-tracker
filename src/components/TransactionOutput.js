import React from "react";

function Transaction(props) {
    const { data, getTransactionId } = props;

    return (
        <div>
            <h1>Recent Transactions</h1>
            {data.map((item, key) => {
                return (
                    <div key={key}>
                        <h2>Month: {item.month}</h2>
                        {item.dailyTrans.map((subItem, key) => {
                            return (
                                <div key={key}>
                                    <p>Day: {subItem.day} </p>
                                    {subItem.transactions.map((value, key) => {
                                        return (
                                            <button key={key} 
                                            onClick = {getTransactionId}
                                            data-id = {value.id}
                                            >
                                                <p>Category: {value.transactionCategory}</p>

                                                {value.transactionType !== "transfer" && (
                                                    <p>Account: {value.fromAccount}</p>
                                                )}
                                                {value.transactionType === "transfer" && (
                                                    <div>
                                                        <p>From: {value.fromAccount}</p>
                                                        <p>To: {value.toAccount}</p>
                                                    </div>
                                                )}
                                                <p>Amount: {value.transactionAmount}</p>
                                                <p>Notes: {value.transactionNotes}</p>
                                            </button>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
export default Transaction;