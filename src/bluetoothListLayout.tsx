import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function BluetoothListLayout(props) {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'Arial', fontSize: 15}}>{props.title}</Text>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default BluetoothListLayout;
