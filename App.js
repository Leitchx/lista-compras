import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [item, setItem] = useState('');
  const [quantidade, setQuantidade] = useState('');

  return (
    <View style={styles.container}>
      <TextInput placeholder='Item' 
                 onChangeText={setItem} value={item}/>

      <TextInput placeholder='Quantidade' 
                 onChangeText={setQuantidade}/>
      <Button title='Gravar' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
  },
});
