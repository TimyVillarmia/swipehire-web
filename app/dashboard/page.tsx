"use client";

import { logout } from "@/actions/auth";
import Link from "next/link";



export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <div className="col-span-12 grid grid-cols-12">
        {/* Sidebar (col-span-2) */}
        <aside className="col-span-2 border-r p-4">
          {/* Sidebar content goes here */}
          <nav>
            <ul>
              <li>Sidebar Item 1</li>
              <li>Sidebar Item 2</li>
              <li>Sidebar Item 3</li>
            </ul>
          </nav>
        </aside>

        {/* Main Content (col-span-10) */}
        <main className="col-span-10 p-4">
          {/* Main Content Body */}
          <div className="p-4">
            swiping
            <button onClick={() => logout()}>Logout</button>
            <Link href="/profile">Profile</Link>
          </div>
        </main>
      </div>
    </div>
  );
}