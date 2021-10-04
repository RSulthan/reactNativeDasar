import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import StylingComponent from './pages/StylingComponent';
import Position from './pages/Position';
import FlexBox from './pages/FlexBox';
import SampleComponent from './pages/SampleComponent';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import BasicJavascript from './pages/BasicJavascript';
import ReactNativeSVG from './pages/ReactNativeSvg';
import CallAPIVanilla from './pages/CallAPIVanilla';
import CallAPIAxios from './pages/CallAPIAxios';
import LocalAPI from './pages/LocalAPI';

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
        {/* <Communication /> */}
        {/* <StylingComponent /> */}
        {/* <Position /> */}
        {/* <FlexBox /> */}
        {/* {isShow && <FlexBox />} */}
        {/* <SampleComponent /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <BasicJavascript /> */}
        {/* <ReactNativeSVG /> */}
        {/* <CallAPIVanilla /> */}
        {/* <CallAPIAxios /> */}
        <LocalAPI />
      </ScrollView>
    </View>
  );
};

export default App;
