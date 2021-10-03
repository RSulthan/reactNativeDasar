import React from 'react';
import {View} from 'react-native';
import StylingComponent from './pages/StylingComponent';
import Position from './pages/Position';
import FlexBox from './pages/FlexBox';
import SampleComponent from './pages/SampleComponent';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <StylingComponent /> */}
      {/* <Position /> */}
      {/* <FlexBox /> */}
      <SampleComponent />
    </View>
  );
};

export default App;
