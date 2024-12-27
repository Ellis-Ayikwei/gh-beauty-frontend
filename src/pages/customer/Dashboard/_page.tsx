import Cards from "./Cards";
import ProfileNav from "./ProfileNav";

const CustomerDashboard = () => {
  return (
    <>
      <div className="justify-center h-screen bg-slate-100">
        <ProfileNav />
        <Cards />
      </div>
    </>
  );
};

export default CustomerDashboard;
