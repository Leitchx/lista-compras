import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [item, setItem] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [lista, setLista] = useState([{id : 1, nome : 'mouse', quantidade : 12}]);

  return (
    <View style={styles.container}>
      <TextInput placeholder='Item' style={styles.input}
                 onChangeText={setItem} value={item}/>

      <TextInput placeholder='Quantidade' style={styles.input}
                 onChangeText={setQuantidade} value={quantidade}/>

      <Button title='Gravar' />

      <FlatList 
        data={lista}
        keyExtractor={id => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.texto}>{item.nome} - {item.quantidade}</Text>
            <Button title='Apagar' color={'red'}/>
          </View>
  )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
  }, item: {
    flexDirection: 'row', padding: 10, alignItems: 'center'
  }, texto: { 
    fontSize: 16, marginRight: 10, 
  }, input: {
    borderWidth: 1, padding: 5, marginBottom: 10,
  }
});
