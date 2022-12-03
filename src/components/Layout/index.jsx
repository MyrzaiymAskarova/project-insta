import Navbar from "../Navbar";
import "./styles.css";
const Layout = ({ nickname, avatarUrl, id, children }) => {
  return (
    <div className="cnLayoutRoot">
      <Navbar nickName={nickname} avatarUrl={avatarUrl} id={id} />
      <div className="cnLayoutBady">{children}</div>
    </div>
  );
};
export default Layout;
