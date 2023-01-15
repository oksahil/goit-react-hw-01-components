import PropTypes from 'prop-types';
import css from "./profile.module.css";

export default function Profile({ username, tag, location, avatar, followers, views, likes }) {
    return (
    <div className={css.profile}>
            <div className={css.description}>
                <img
                src={avatar}
                alt="User avatar"
                className = {css.avatar}
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.grid}>
            <li className={css.gridItem}>
                    <span className="label">Followers</span>
                    <p className="quantity">{followers}</p>
            </li>
            <li className={css.gridItem}>
                    <span className="label">Views</span>
                    <p className="quantity">{ views}</p>
            </li>
            <li className={css.gridItem}>
                    <span className="label">Likes</span>
                    <p className="quantity">{ likes}</p>
            </li>
        </ul>
    </div>   
    
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};
