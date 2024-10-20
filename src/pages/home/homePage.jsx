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
     
      <style jsx>{`
        .signOutButton {
          display: flex;
          flex-direction: row;
        }
      `}</style>

    </div>
  );
}

export default withAuthenticator(Home);