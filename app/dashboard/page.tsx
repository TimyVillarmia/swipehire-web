"use client";

import { logout } from "@/actions/auth";



export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => logout()}>Logout</button>

    </div>
  );
}