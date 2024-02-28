import { Navigate } from "react-router-dom";

const Profile = ({hidden, setHidden}) => {
  if (!hidden) {
    return <Navigate to="/" replace />;
    console.log(hidden);
  }
  return <div>Profile</div>;
};

export default Profile;
