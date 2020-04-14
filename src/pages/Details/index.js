import 'react-native-get-random-values';
import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;

  useEffect(() => {
    console.log(item);
    navigation.setOptions({ title: item.title });
  });

  return <WebView source={{ uri: item.url }} />;
}
