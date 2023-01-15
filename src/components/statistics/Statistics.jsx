import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import css from "./statistics.module.css";


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function Statistics({ title, data }) {
        return (
          <div className={css.stat}>
  
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statGrid}>
         {data.map(data => ( 
           <li style={{ backgroundColor: getRandomHexColor() }} className={css.gridItem} key={data.id}>
      <StatisticsItem
                        label = {data.label}
                        percentage = {data.percentage}
                    />
    </li>
    ))}
              </ul>

</div>
    
    );
}
export default Statistics;

Statistics.defaultProps = {
    data: []
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string.isRequired,
   })) 
}