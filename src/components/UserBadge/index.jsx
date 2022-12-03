import { useNavigate } from "react-router-dom";
import "./styles.css";

const UserBadge = ({ nickname, avatarUrl, id }) => {
  const navigate = useNavigate();
  const onUserBadgeClick = () => {
    navigate(`/${id}`);
  };
  return (
    <div className="cnUserBadgeRoot" onClick={onUserBadgeClick}>
      {avatarUrl ? (
        <img src={avatarUrl} alt="logo" className="cnUserBadgeAvatar" />
      ) : (
        <div className="nvUserBadgePlaceholder" />
      )}
      <span className="cnUserBadgeName">{nickname}</span>
    </div>
  );
};

export default UserBadge;
