import PropTypes from 'prop-types';
import css from "./section.module.css";

function Section({ title, children }) {
return (
<section className={css.sectionStyle}>
        {title && <h2>{title}</h2>}
        {children}
</section>
)
}

export default Section;

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};