import React from 'react';
import {StyleSheet, Text, FlatList, View} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import Layout from './bluetoothListLayout';
import Empty from './empty';

import Toggle from './toggle';
import SubTitle from './subTitle';

const App = (props) => {
  const [list, setList] = React.useState([]);
  const [enable, setEnable] = React.useState(false);

  React.useEffect(() => {
    async function init() {
      const _enable = await BluetoothSerial.requestEnable();
      const _list = await BluetoothSerial.list();
      setList(_list);
      setEnable(_enable);
      console.log('Gelen liste :', list);
    }

    init();

    return () => {
      async function remove() {
        await BluetoothSerial.stopScanning();
        console.log('Terminal taraması : ');
      }
      remove();
    };
  }, []);

  const renderEmpty = () => <Empty text="Bir şey yok" />;
  const toggleBluetooth = (value) => {
    setEnable(!enable);
  };

  const renderItem = (item) => (
    <View style={{flexDirection: 'column', margin: 20}}>
      <Text style={styles.itemText}>id : {item.id}</Text>
      <Text style={styles.itemText}>cihaz adı : {item.name}</Text>
    </View>
  );

  const data1 = [
    {
      address: 'C4:30: numarası',
      class: 1064,
      id: 'C4: .. numarası',
      name: 'LG telefon',
    },
  ];
  return (
    <Layout title="Bluetooth">
      <Toggle value={enable} onValueChange={toggleBluetooth} />
      <SubTitle title="Alt başlık" />
      <FlatList
        data={list}
        ListEmptyComponent={renderEmpty}
        renderItem={({item}) => renderItem(item)}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  itemText: {fontSize: 20, color: 'purple', padding: 10},
});

export default App;
