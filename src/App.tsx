// App.tsx
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Ready to Create?</h1>
          <p className="text-lg mb-6">
            Kickstart your journey with this boilerplate. Build something
            amazing!
          </p>
          <a
            className="bg-indigo-600 inline-block cursor-pointer text-white py-2 px-4 rounded hover:bg-indigo-700"
            href="https://github.com/aibiansari/vite-react-app-boilerplate"
            target="_blank"
          >
            Get Started
          </a>
        </div>
      </main>

      <footer className="bg-slate-800 text-center p-3">
        <p className="text-md">
          Crafted by{" "}
          <a
            href="https://github.com/aibiansari"
            className="font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abdullah Ansari
          </a>{" "}
          | Clone and customize as you wish.
        </p>
      </footer>
    </div>
  );
};

export default App;
