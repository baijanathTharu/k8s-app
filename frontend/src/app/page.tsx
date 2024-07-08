"use client";

import { useEffect, useState } from "react";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      const res = await fetch(`${BACKEND_URL}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        const resp = await res.json();
        console.error("Failed to get message from server", resp);
        setMessage("Failed to get message from server");
        return;
      }
      const data = await res.json();
      setMessage(data.message);
    })();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      K8S App V1 <b>From Server: {message}</b>
    </main>
  );
}
