import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import api from '../../services/api';
import { styles } from './styles';

export default function Main() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigation = useNavigation();

  const load = useCallback(async currentPage => {
    const response = await api.get('/products', {
      params: { page: currentPage, limit: 5 },
    });
    const { docs, pages } = response.data;
    setList(old => [...old, ...docs]);
    setTotalPages(pages);
  }, []);

  useEffect(() => {
    load(page);
  }, [page, load]);

  const handleNavigateToDetails = item =>
    navigation.navigate('details', { item });

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigateToDetails(item)}
      >
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );

  const loadMore = () => {
    if (page === totalPages) return;

    setPage(page + 1);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={item => String(item._id)}
        renderItem={renderItem}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
}
