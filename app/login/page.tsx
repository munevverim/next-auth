

"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Giriş Yap</h1>
      <button
        onClick={() => signIn("auth0")}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Google ile Giriş Yap
      </button>
    </div>
  );
}
