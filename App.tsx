import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

import BluetoothList from './src/bluetoothList';
const App = (props) => {
  const customTextButton = (
    <Icon.Button name="bluetooth" backgroundColor="orange">
      <Text style={{fontFamily: 'Arial', fontSize: 15}}>Bluetooth About</Text>
    </Icon.Button>
  );
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {customTextButton}
          <BluetoothList />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
