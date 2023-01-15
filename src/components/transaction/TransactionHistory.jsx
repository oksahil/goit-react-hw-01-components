import PropTypes from 'prop-types';
import TransactionTr from './TransactionTr';
import css from "./transaction.module.css";

function TransactionHistory({transactions}) {
    return (
    <div className="transaction-history-div">
        <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th className={css.title}>Type</th>
      <th className={css.title}>Amount</th>
      <th className={css.title}>Currency</th>
    </tr>
  </thead>

  <tbody>
            {transactions.map(transaction => ( 
              <tr  className={css.trGrau} key={transaction.id} data-action="1">
                  <TransactionTr
                        type = {transaction.type}
                        amount={transaction.amount}
                        currency = {transaction.currency}
                  />
                </tr>
          ))}
    
   </tbody>
</table>
    </div>   
    
    );
}

export default TransactionHistory;

TransactionHistory.defaultProps = {
      transactions: []
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
       id: PropTypes.string.isRequired,
   })) 
}