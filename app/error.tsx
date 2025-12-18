"use client";

import ErrorPage from "@/features/public/error/error";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <ErrorPage />
    </main>
  );
}
