import PropTypes from 'prop-types';
import css from "./transaction.module.css";

function TransactionTr({ type, amount, currency }) {
    return (
        <>
            
                <td className={css.text}>{type}</td>
                <td className={css.text}>{amount}</td>
                <td className={css.text}>{currency}</td>
            
        </>
    
    );
}

export default TransactionTr;

TransactionTr.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    
}

