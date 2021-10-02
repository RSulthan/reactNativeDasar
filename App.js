import React from 'react';
import {View} from 'react-native';
import DaftarHargaMacbook from './component/StylingReactNativeComponent';
import SampleComponent from './component/SampleComponent';
import MateriFlexBox from './component/MateriFlexBox';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <DaftarHargaMacbook /> */}
      {/* <SampleComponent /> */}
      <MateriFlexBox />
    </View>
  );
};

export default App;
