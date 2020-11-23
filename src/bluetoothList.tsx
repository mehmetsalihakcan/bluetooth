import React from 'react';
import {StyleSheet, Text, FlatList} from 'react-native';
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

  const userList = [
    {name: 'Mehmet', key: 1},
    {name: 'Salih', key: 2},
    {name: 'akcan', key: 3},
    {name: 'msa', key: 4},
  ];

  const renderEmpty = () => <Empty text="Bir şey yok" />;
  const toggleBluetooth = (value) => {
    setEnable(!enable);
  };
  return (
    <Layout title="Bluetooth">
      <Toggle value={enable} onValueChange={toggleBluetooth} />
      <SubTitle title="Alt başlık" />
      <FlatList
        data={userList}
        ListEmptyComponent={renderEmpty}
        renderItem={({item}) => (
          <Text style={styles.itemText}>{item.name}</Text>
        )}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  itemText: {fontSize: 20, color: 'purple'},
});

export default App;
