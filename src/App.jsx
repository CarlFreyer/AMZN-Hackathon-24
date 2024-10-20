import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Map from "./Map.jsx";
import Chat from "./Chat.jsx";
import Radar from "./Radar.jsx";

/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

Amplify.configure(outputs);
const client = generateClient({
  authMode: "userPool",
});

export default function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Radar />} />
            <Route exact path="/Map" element={<Map />} />
            <Route exact path="/Chat" element={<Chat />} />
            <Route exact path="/Radar" element={<Radar />} />
        </Routes>
    </Router>
  );
}