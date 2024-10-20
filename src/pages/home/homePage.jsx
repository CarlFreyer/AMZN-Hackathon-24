// const Home = () => {
//     return (
//       <div style={{ color: 'black', textAlign: 'center', padding: '20px' }}>
//         <h1>Welcome to the Home Page</h1>
//       </div>
//     );
//   };
// export default Home;  

import React from "react";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import LoginPage from "./LoginPage";
//...

function Home({ user, signOut }) {
  return (
    <div  style={{ color: 'black'}}>
      <div className="flex justify-end px-4 py-2">
        <button
          type="button"
          className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
      <div className="flex justify-center items-center h-screen w-full">
        <LoginPage />
      </div>
    </div>
  );
}

export default withAuthenticator(Home);