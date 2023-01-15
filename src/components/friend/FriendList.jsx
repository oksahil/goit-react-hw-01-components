import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from "./friend.module.css";


function FriendList({ friends }) {
    return (
        <>
            <ul className={css.friendList}>
                
                {friends.map(friend => (
                    <li key={friend.id} className={css.friendItem}>
                    <FriendListItem
                        friendName = {friend.name}
                        avatarUrl = {friend.avatar}
                        status = {friend.isOnline}
                    />
                    </li>
                ))}
                 
    
        </ul>
    </>   
    
    );
}
export default FriendList;

FriendList.defaultProps = {
    friends: []
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
       id: PropTypes.number.isRequired,
   })) 
}