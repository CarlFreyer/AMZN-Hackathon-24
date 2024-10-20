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
import Messenger from "./pages/chat/messenger.jsx"
import Home from "./pages/home/homePage.jsx"
import Radar from "./Radar.jsx";
import Header from "./Header.jsx";

/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

import HeatMap from './pages/heatmap/heatMap';

export default function App() {
  return (
    <Router>
      <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Map" element={<Map />} />
            <Route exact path="/Chat" element={<Messenger />} />
            <Route exact path="/Radar" element={<Radar />} />
        </Routes>
    </Router>
  );
}
