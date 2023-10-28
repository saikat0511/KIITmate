import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loading = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="30" color="#00ff00" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '00be00',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Loading;
