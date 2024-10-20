import React from "react";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";

function Home({ user, signOut }) {
  const navigate = useNavigate();

  return (
    <div  style={{ color: 'black'}}>
       <div className="flex justify-center items-center h-screen w-full">
        <LoginPage />
      </div>
      <div className="flex justify-end px-4 py-2">
        <button
          type="button"
          className="signOutButton"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
      <div className="flex justify-center items-center h-screen w-full">
        <h1>Welcome to the Home Page</h1>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="relative inline-flex items-center gap-x-1.5 rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
          onClick={() => navigate("/chatroom")}
        >
          Go to Chatroom
        </button>
      </div>
    </div>
  );
}

export default withAuthenticator(Home);
