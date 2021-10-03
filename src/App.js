import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import StylingComponent from './pages/StylingComponent';
import Position from './pages/Position';
import FlexBox from './pages/FlexBox';
import SampleComponent from './pages/SampleComponent';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 6000);
  }, [isShow]);
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Communication />
        {/* <StylingComponent /> */}
        {/* <Position /> */}
        {/* <FlexBox /> */}
        {/* {isShow && <FlexBox />} */}
        {/* <SampleComponent /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
      </ScrollView>
    </View>
  );
};

export default App;
