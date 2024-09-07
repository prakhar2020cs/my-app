import SessionList from '../components/SessionList';


const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <section>
        <h2>Upcoming Sessions</h2>
        <SessionList />  {/* Component to display upcoming sessions */}
      </section>
      <section>
        <h2>Manage Users</h2>
        {/* <UserList />  Component to display and manage users */}
      </section>
    </div>
  );
};

export default AdminDashboard;