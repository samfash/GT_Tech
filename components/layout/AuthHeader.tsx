"use client";

import Link from "next/link";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

export function AuthHeader() {
  const { logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header
      style={{
        padding: "1rem",
        borderBottom: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
      }}
    >
      <strong>GT Tech Dashboard</strong>

      <nav style={{ display: "flex", gap: "1rem", marginLeft: "auto" }}>
        <Link href="/dashboard">Home</Link>
        {/* other protected links should be here */}
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}
