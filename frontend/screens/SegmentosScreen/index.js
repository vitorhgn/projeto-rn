import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function SegmentosScreen({ route, navigation }) {
  const { associacao } = route.params;

  const handleSegmentoPress = (segmento) => {
    navigation.navigate('Parceiros', { segmento });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Segmentos da {associacao.nome}</Text>
      <FlatList
        data={associacao.segmentos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleSegmentoPress(item)}
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
});
