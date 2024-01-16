import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Star = () => {
  return (
    <View style={styles.starContainer}>
      <Text style={styles.star}>
      <Text>★</Text>
      <Text>★</Text>
      <Text>★</Text>
      <Text>★</Text>
      <Text>★</Text>
      <Text style={styles.review}>(Xem 828 đánh giá)</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  starContainer: {
    justifyContent: 'center',
    alignItems: 'left',
    marginTop: -10,
  },
  star: {
    fontSize: 27,
    color: 'gold', 
    // paddingLeft: 18,
  },
  review: {
    fontSize: 15,
    color:'black',
    paddingLeft:'20px'
  }
});

export default Star;
