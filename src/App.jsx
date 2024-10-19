import * as React from 'react';
import { Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import BasicMap from './Map';
import { Amplify } from 'aws-amplify';
import { MapView } from '@aws-amplify/ui-react-geo';

import '@aws-amplify/ui-react-geo/styles.css';

import amplifyconfig from './amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

function App() {
  return (<MapView 
        initialViewState={{
          latitude: 37.8,
          longitude: -122.4,
          zoom: 14,
        }}/>);
}

export default App;