import PropTypes from 'prop-types';
import css from "./friend.module.css";


function FriendListItem({
  friendName,
  avatarUrl,
  status }) {
  return (
    <>
      <span className={status ? css.statusGreen : css.statusRed}>{status}</span>
      <img className="avatar" src={avatarUrl} alt="User avatar" width="48" />
      <p className={css.name}>{friendName}</p>
    </>
    );
}

FriendListItem.propTypes = {
    friendName: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
};

export default FriendListItem;