import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import StylingComponent from './pages/StylingComponent';
import Position from './pages/Position';
import FlexBox from './pages/FlexBox';
import SampleComponent from './pages/SampleComponent';
import PropsDinamis from './pages/PropsDinamis';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     SetIsShow(false);
  //   }, 6000);
  // }, [isShow]);
  return (
    <View style={{flex: 1}}>
      {/* <StylingComponent /> */}
      {/* <Position /> */}
      {/* <FlexBox /> */}
      {/* {isShow && <FlexBox />} */}
      {/* <SampleComponent /> */}
      <PropsDinamis />
    </View>
  );
};

export default App;
