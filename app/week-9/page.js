'use client';
import Link from 'next/link';
import { useUserAuth } from './_utils/auth-context';

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to Shopping List</h1>

      {!user ? (
        <button
          onClick={async () => {
            try {
              await gitHubSignIn();
              console.log("✅ GitHub sign-in successful");
            } catch (error) {
              console.error("❌ GitHub sign-in error:", error);
              alert("Login failed. Check the console for more details.");
            }
          }}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Sign in with GitHub
        </button>
      ) : (
        <>
          <p className="mb-4">
            Welcome, {user.displayName} ({user.email})
          </p>
          <Link
            href="/week-9/shopping-list"
            className="text-blue-600 underline block mb-4"
          >
            Go to Shopping List
          </Link>
          <button
            onClick={firebaseSignOut}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Sign Out
          </button>
        </>
      )}
    </main>
  );
}

