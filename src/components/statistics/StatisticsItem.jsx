import PropTypes from 'prop-types';
import css from "./statistics.module.css";

function StatisticsItem({ label, percentage }) {
    return (
    <>
        <p className={css.label}>{label}</p>
        <p className={css.percentage}>{percentage}%</p>
    </>
    );
}
export default StatisticsItem;

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    rendomColor: PropTypes.string,
    
}