import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function SubTitle(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    alignItems: 'center',

    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    color: 'grey',
    fontWeight: 'bold',
  },
  line: {
    borderBottomWidth: 1,
    flex: 1,
    marginTop: 3,
    width: 50,
    marginLeft: 5,
    borderColor: '#eceff1',
  },
});

export default SubTitle;
