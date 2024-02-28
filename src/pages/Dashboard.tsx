import { Navigate } from "react-router-dom";

const Dashboard = ({ hidden }) => {
  if (!hidden) {
    return <Navigate to="/" replace />;
    console.log(hidden);
  }
  return <div>
    Dashboard
  </div>;
};

export default Dashboard;
