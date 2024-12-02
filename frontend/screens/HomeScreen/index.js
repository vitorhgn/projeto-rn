import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { associacoes } from '../../data';  // Importando o arquivo de dados

export default function HomeScreen({ navigation }) {
  const [busca, setBusca] = useState('');
  const [dadosFiltrados, setDadosFiltrados] = useState(associacoes);

  const filtrarDados = (texto) => {
    setBusca(texto);
    const resultado = associacoes.filter((item) =>
      item.nome.toLowerCase().includes(texto.toLowerCase())
    );
    setDadosFiltrados(resultado);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Associações Parceiras</Text>
      <TextInput
        style={styles.input}
        placeholder="Buscar associação..."
        value={busca}
        onChangeText={filtrarDados}
      />
      <FlatList
        data={dadosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate('Segmentos', { associacao: item })
            }
          >
            <Text style={styles.itemText}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  item: {
    padding: 15,
    backgroundColor: '#e3e3e3',
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
  },
});
