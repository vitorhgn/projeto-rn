import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const empresasPorSegmento = {
  Saúde: [
    { id: '1', nome: 'Clínica Boa Saúde', desconto: '10%' },
    { id: '2', nome: 'Farmácia Popular', desconto: '15%' },
  ],
  Educação: [
    { id: '3', nome: 'Escola Saber', desconto: '20%' },
    { id: '4', nome: 'Libraria Cultura', desconto: '5%' },
  ],
  Tecnologia: [
    { id: '5', nome: 'Loja Tech', desconto: '8%' },
    { id: '6', nome: 'Curso Online Dev', desconto: '12%' },
  ],
  Comércio: [
    { id: '7', nome: 'Supermercado Local', desconto: '10%' },
    { id: '8', nome: 'Loja de Roupas', desconto: '15%' },
  ],
};

export default function EmpresasScreen({ route }) {
  const { segmento } = route.params;

  const empresas = empresasPorSegmento[segmento.nome] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Empresas no segmento: {segmento.nome}</Text>
      <FlatList
        data={empresas}
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
    fontWeight: 'bold',
  },
  desconto: {
    fontSize: 14,
    color: '#555',
  },
  semEmpresas: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
    color: '#999',
  },
});
