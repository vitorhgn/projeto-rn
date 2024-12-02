import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function EmpresasScreen({ route }) {
  const { segmento } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Empresas no segmento: {segmento.nome}</Text>
      <FlatList
        data={segmento.empresas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.nome}</Text>
            <Text style={styles.desconto}>Desconto: {item.desconto}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.semEmpresas}>
            Nenhuma empresa cadastrada para esse segmento.
          </Text>
        }
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
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
  desconto: {
    fontSize: 14,
    color: '#888',
  },
  semEmpresas: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});
