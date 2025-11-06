import React, { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/api/admin/users").then(res => res.json()).then(setUsers);
  }, []);
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {users.map((u: any) => <li key={u.id}>{u.username} — Balance: {u.balance}</li>)}
      </ul>
    </div>
  );
}