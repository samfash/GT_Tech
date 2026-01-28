"use client";

import "@/styles/globals_v2.css";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import { AuthHeader } from "@/components/layout/AuthHeader";


export default function AuthLayout({ children }: { children: ReactNode }) {
  const { isLoggedIn } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/"); // redirect to public home if not logged in or could redirect to public login page
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) return null; // or a loading spinner

  return ( 
  <>
  <AuthHeader />
    <main>{children}</main>
  </>
  );
}


